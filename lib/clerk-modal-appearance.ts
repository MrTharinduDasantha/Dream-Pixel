import { dark } from "@clerk/themes";

export const clerkModalAppearance = {
  theme: dark,
  variables: {
    colorPrimary: "oklch(0.7357 0.1641 34.7091)",
    colorPrimaryForeground: "oklch(1 0 0)",
    colorBackground: "oklch(0.3184 0.0176 341.4465)",
    colorForeground: "oklch(0.9397 0.0119 51.3156)",
    colorCard: "oklch(0.3184 0.0176 341.4465)",
    colorCardForeground: "oklch(0.9397 0.0119 51.3156)",
    colorInput: "oklch(0.3637 0.0203 342.2664)",
    colorInputForeground: "oklch(0.9397 0.0119 51.3156)",
    colorSecondary: "oklch(0.3637 0.0203 342.2664)",
    colorSecondaryForeground: "oklch(0.9397 0.0119 51.3156)",
    colorMuted: "oklch(0.2848 0.0159 343.6554)",
    colorMutedForeground: "oklch(0.8378 0.0237 52.6346)",
    colorAccent: "oklch(0.8278 0.1131 57.9984)",
    colorAccentForeground: "oklch(0.2569 0.0169 352.4042)",
    colorBorder: "oklch(0.3637 0.0203 342.2664)",
    colorRing: "oklch(0.7357 0.1641 34.7091)",
    fontFamily:
      "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    borderRadius: "0.625rem",
    borderRadiusSmall: "0.375rem",
    borderRadiusLarge: "0.875rem",
  },
  element: {
    formButtonPrimary: {
      backgroundColor: "oklch(0.7357 0.1641 34.7091)",
      color: "oklch(1 0 0)",
      "&:hover": {
        backgroundColor: "oklch(0.68 0.1641 34.7091)",
      },
      "&:active": {
        backgroundColor: "oklch(0.63 0.1641 34.7091)",
      },
    },
    formButtonReset: {
      backgroundColor: "oklch(0.3637 0.0203 342.2664)",
      color: "oklch(0.9397 0.0119 51.3156)",
      borderColor: "oklch(0.3637 0.0203 342.2664)",
      "&:hover": {
        backgroundColor: "oklch(0.4 0.0203 342.2664)",
      },
    },
    card: {
      backgroundColor: "oklch(0.3184 0.0176 341.4465)",
      borderColor: "oklch(0.3637 0.0203 342.2664)",
    },
    headerTitle: {
      color: "oklch(0.9397 0.0119 51.3156)",
      fontFamily:
        "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    headerSubtitle: {
      color: "oklch(0.8378 0.0237 52.6346)",
    },
    socialButtonsBlockButton: {
      backgroundColor: "oklch(0.3637 0.0203 342.2664)",
      color: "oklch(0.9397 0.0119 51.3156)",
      borderColor: "oklch(0.3637 0.0203 342.2664)",
      "&:hover": {
        backgroundColor: "oklch(0.4 0.0203 342.2664)",
      },
    },
    formFieldInput: {
      backgroundColor: "oklch(0.3637 0.0203 342.2664)",
      color: "oklch(0.9397 0.0119 51.3156)",
      borderColor: "oklch(0.3637 0.0203 342.2664)",
      "&:focus": {
        borderColor: "oklch(0.7357 0.1641 34.7091)",
        boxShadow: "0 0 0 1px oklch(0.7357 0.1641 34.7091)",
      },
    },
    footerActionLink: {
      color: "oklch(0.7357 0.1641 34.7091)",
      "&:hover": {
        color: "oklch(0.68 0.1641 34.7091)",
      },
    },
  },
} as const;
