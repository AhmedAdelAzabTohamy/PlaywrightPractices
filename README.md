# Playwright Practices

This repository contains focused Playwright automation exercises. Each task is
kept in its own pull request so the progression and practices can be reviewed
independently.

## Tasks

- **Task 1 - Page Object Basics:** Build a small page-object hierarchy and use
  accessible locators for a Sauce Demo login flow.
- **Task 2 - Locator Strategies:** Practice role, label, placeholder, CSS, and
  filtered locators across a registration and checkout flow.
- **Task 3 - End-to-End Page Objects:** Compose page objects into a complete
  registration, login, product, cart, and checkout scenario.

## Setup

```bash
npm install
npx playwright install
```

Run the tests with:

```bash
npx playwright test
```

The examples target the public demo applications referenced in each task.
