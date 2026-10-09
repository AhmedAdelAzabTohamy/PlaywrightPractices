import { APIRequestContext, expect, request } from "@playwright/test";

const BASE_URL = "https://rahulshettyacademy.com";

export type LoginCredentials = {
    userEmail: string;
    userPassword: string;
};

export class AuthApi {
    private constructor(
        private readonly apiContext: APIRequestContext
    ) {}

    static async create(): Promise<AuthApi> {
        const apiContext = await request.newContext({
            baseURL: BASE_URL
        });

        return new AuthApi(apiContext);
    }

    async login({
        userEmail,
        userPassword
    }: LoginCredentials): Promise<string> {

        const loginResponse = await this.apiContext.post(
            "/api/ecom/auth/login",
            {
                data: {
                    userEmail,
                    userPassword
                }
            }
        );

        expect(
            loginResponse.ok(),
            `Login failed for ${userEmail}`
        ).toBeTruthy();

        const loginResponseBody = await loginResponse.json();

        expect(
            loginResponseBody.token,
            "Login response missing token"
        ).toBeTruthy();

        return loginResponseBody.token as string;
    }

    async dispose(): Promise<void> {
        await this.apiContext.dispose();
    }
}

