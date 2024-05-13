/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      boxShadow: {
        "background-xsm": "0 2px 2px 2px rgba(0, 0, 0, 0.16)",
        "background-sm": "0 8px 10px rgba(0, 0, 0, 0.06)",
        "background-md": "0 16px 18px rgba(0, 0, 0, 0.06)",
        "background-lg": "0 16px 18px rgba(0, 0, 0, 0.06)",
        "background-xlg": "0 32px 36px rgba(0, 0, 0, 0.06)",
        "background-xlg-3x": "0 64px 64px rgba(0, 0, 0, 0.06)",
        "button-xsm": "0 2px 2px 2px rgba(0, 0, 0, 0.24)",
        "button-sm": "0 8px 10px rgba(0, 0, 0, 0.06)",
        "button-md": "0 16px 18px rgba(0, 0, 0, 0.06)",
        "button-lg": "0 32px 36px rgba(0, 0, 0, 0.06)",
        "badge-sm": "0 2px 2px rgba(0, 0, 0, 0.16)",
      },
      colors: {
        "background-fill-central": "var(--colors-nutral-white-white-main)",
        "background-fill-heart": "var(--colors-nutral-white-white-main)",
        "background-fill-inner": "var(--colors-nutral-white-white-main)",
        "background-fill-middle": "var(--colors-nutral-white-white-main)",
        "background-fill-outermost": "var(--colors-nutral-white-white-main)",
        "background-fill-surface":
          "var(--colors-nutral-gray-soft-gray-soft-25)",
        "background-fill-white": "#ffffff",
        "background-stroke-central":
          "var(--colors-nutral-gray-soft-gray-soft-50)",
        "background-stroke-heart":
          "var(--colors-nutral-gray-soft-gray-soft-50)",
        "background-stroke-inner":
          "var(--colors-nutral-gray-soft-gray-soft-50)",
        "background-stroke-middle":
          "var(--colors-nutral-gray-soft-gray-soft-50)",
        "background-stroke-outermost":
          "var(--colors-nutral-gray-soft-gray-soft-50)",
        "background-stroke-surface":
          "var(--colors-nutral-gray-soft-gray-soft-100)",
        "component-reversed":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-800)",
        "component-fill-dark":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-800)",
        "component-fill-dark-soft":
          "var(--colors-nutral-gray-soft-gray-soft-50)",
        "component-fill-disabled":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-25)",
        "component-fill-light": "var(--colors-nutral-white-white-main)",
        "component-fill-light-fixed": "var(--colors-nutral-white-white-main)",
        "component-fill-negative":
          "var(--colors-feedback-negative-negative-500-main)",
        "component-fill-negative-soft":
          "var(--colors-feedback-negative-negative-25)",
        "component-fill-positive":
          "var(--colors-feedback-positive-positive-500-main)",
        "component-fill-positive-sfot":
          "var(--colors-feedback-positive-positive-25)",
        "component-fill-primary":
          "var(--colors-brand-primary-primary-500-main)",
        "component-fill-primary-soft": "var(--colors-brand-primary-primary-25)",
        "component-fill-secondary":
          "var(--colors-brand-secondary-secondary-500-main)",
        "component-fill-secondary-soft":
          "var(--colors-brand-secondary-secondary-25)",
        "component-fill-tertiary":
          "var(--colors-brand-teritary-tertiary-500-main)",
        "component-fill-tertiary-soft":
          "var(--colors-brand-teritary-tertiary-25)",
        "component-fill-warning":
          "var(--colors-feedback-warning-warning-500-main)",
        "component-fill-warning-soft":
          "var(--colors-feedback-warning-warning-25)",
        "component-stroke-dark":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-800)",
        "component-stroke-dark-soft":
          "var(--colors-nutral-gray-soft-gray-soft-100)",
        "component-stroke-disabled":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-50)",
        "component-stroke-light-fixed": "var(--colors-nutral-white-white-main)",
        "component-stroke-negative":
          "var(--colors-feedback-negative-negative-500-main)",
        "component-stroke-negative-soft":
          "var(--colors-feedback-negative-negative-100)",
        "component-stroke-positive":
          "var(--colors-feedback-positive-positive-500-main)",
        "component-stroke-positive-soft":
          "var(--colors-feedback-positive-positive-100)",
        "component-stroke-primary":
          "var(--colors-brand-primary-primary-500-main)",
        "component-stroke-primary-soft":
          "var(--colors-brand-primary-primary-100)",
        "component-stroke-secondary":
          "var(--colors-brand-secondary-secondary-500-main)",
        "component-stroke-secondary-soft":
          "var(--colors-brand-secondary-secondary-100)",
        "component-stroke-tertiary":
          "var(--colors-brand-teritary-tertiary-500-main)",
        "component-stroke-tertiary-soft":
          "var(--colors-brand-teritary-tertiary-100)",
        "component-stroke-warning":
          "var(--colors-feedback-warning-warning-500-main)",
        "component-stroke-warning-soft":
          "var(--colors-feedback-warning-warning-100)",
        "component-text-dark":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-700)",
        "component-text-dark-hover":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-800)",
        "component-text-disabled":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-50)",
        "component-text-gray": "var(--colors-nutral-gray-soft-gray-soft-900)",
        "component-text-gray-hover":
          "var(--colors-nutral-gray-soft-gray-soft-600)",
        "component-text-light": "var(--colors-nutral-white-white-main)",
        "component-text-light-fixed": "var(--colors-nutral-white-white-main)",
        "component-text-negative":
          "var(--colors-feedback-negative-negative-500-main)",
        "component-text-negative-hover":
          "var(--colors-feedback-negative-negative-600)",
        "component-text-positive":
          "var(--colors-feedback-positive-positive-500-main)",
        "component-text-positive-hover":
          "var(--colors-feedback-positive-positive-600)",
        "component-text-primary":
          "var(--colors-brand-primary-primary-500-main)",
        "component-text-primary-hover":
          "var(--colors-brand-primary-primary-600)",
        "component-text-secondary":
          "var(--colors-brand-secondary-secondary-500-main)",
        "component-text-secondary-hover":
          "var(--colors-brand-secondary-secondary-600)",
        "component-text-tertiary":
          "var(--colors-brand-teritary-tertiary-500-main)",
        "component-text-tertiary-hover":
          "var(--colors-brand-teritary-tertiary-600)",
        "component-text-warning":
          "var(--colors-feedback-warning-warning-500-main)",
        "component-text-warning-hover":
          "var(--colors-feedback-warning-warning-600)",
        "component-hover-dark":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-600)",
        "component-hover-dark-soft":
          "var(--colors-nutral-gray-soft-gray-soft-100)",
        "component-hover-gray": "var(--colors-nutral-gray-soft-gray-soft-50)",
        "component-hover-light": "var(--colors-nutral-white-white-main)",
        "component-hover-light-fixed": "var(--colors-nutral-white-white-main)",
        "component-hover-negative":
          "var(--colors-feedback-negative-negative-600)",
        "component-hover-negative-light":
          "var(--colors-feedback-negative-negative-400)",
        "component-hover-negative-soft":
          "var(--colors-feedback-negative-negative-50)",
        "component-hover-positive":
          "var(--colors-feedback-positive-positive-600)",
        "component-hover-positive-light":
          "var(--colors-feedback-positive-positive-400)",
        "component-hover-positive-soft":
          "var(--colors-feedback-positive-positive-50)",
        "component-hover-primary": "var(--colors-brand-primary-primary-600)",
        "component-hover-primary-light":
          "var(--colors-brand-primary-primary-400)",
        "component-hover-primary-soft":
          "var(--colors-brand-primary-primary-50)",
        "component-hover-secondary":
          "var(--colors-brand-secondary-secondary-600)",
        "component-hover-secondary-light":
          "var(--colors-brand-secondary-secondary-400)",
        "component-hover-secondary-soft":
          "var(--colors-brand-secondary-secondary-50)",
        "component-hover-tertiary": "var(--colors-brand-teritary-tertiary-600)",
        "component-hover-tertiary-light":
          "var(--colors-brand-teritary-tertiary-400)",
        "component-hover-tertiary-soft":
          "var(--colors-brand-teritary-tertiary-50)",
        "component-hover-warning": "var(--colors-feedback-warning-warning-600)",
        "component-hover-warning-light":
          "var(--colors-feedback-warning-warning-400)",
        "component-hover-warning-soft":
          "var(--colors-feedback-warning-warning-50)",
        "container-fill-dark":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-800)",
        "container-fill-dark-soft":
          "var(--colors-nutral-gray-soft-gray-soft-50)",
        "container-fill-disabled":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-25)",
        "container-fill-light": "var(--colors-nutral-white-white-main)",
        "container-fill-light-fixed": "var(--colors-nutral-white-white-main)",
        "container-fill-negative":
          "var(--colors-feedback-negative-negative-500-main)",
        "container-fill-negative-soft":
          "var(--colors-feedback-negative-negative-25)",
        "container-fill-positive":
          "var(--colors-feedback-positive-positive-500-main)",
        "container-fill-positive-sfot":
          "var(--colors-feedback-positive-positive-25)",
        "container-fill-primary":
          "var(--colors-brand-primary-primary-500-main)",
        "container-fill-primary-soft": "var(--colors-brand-primary-primary-50)",
        "container-fill-secondary":
          "var(--colors-brand-secondary-secondary-500-main)",
        "container-fill-secondary-soft":
          "var(--colors-brand-secondary-secondary-25)",
        "container-fill-tertiary":
          "var(--colors-brand-teritary-tertiary-500-main)",
        "container-fill-tertiary-soft":
          "var(--colors-brand-teritary-tertiary-25)",
        "container-fill-warning":
          "var(--colors-feedback-warning-warning-500-main)",
        "container-fill-warning-soft":
          "var(--colors-feedback-warning-warning-25)",
        "container-stroke-dark":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-800)",
        "container-stroke-dark-soft":
          "var(--colors-nutral-gray-soft-gray-soft-100)",
        "container-stroke-disabled":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-50)",
        "container-stroke-negative":
          "var(--colors-feedback-negative-negative-500-main)",
        "container-stroke-negative-soft":
          "var(--colors-feedback-negative-negative-100)",
        "container-stroke-positive":
          "var(--colors-feedback-positive-positive-500-main)",
        "container-stroke-positive-soft":
          "var(--colors-feedback-positive-positive-100)",
        "container-stroke-primary":
          "var(--colors-brand-primary-primary-500-main)",
        "container-stroke-primary-soft":
          "var(--colors-brand-primary-primary-100)",
        "container-stroke-secondary":
          "var(--colors-brand-secondary-secondary-500-main)",
        "container-stroke-secondary-soft":
          "var(--colors-brand-secondary-secondary-100)",
        "container-stroke-tertiary":
          "var(--colors-brand-teritary-tertiary-500-main)",
        "container-stroke-tertiary-soft":
          "var(--colors-brand-teritary-tertiary-100)",
        "container-stroke-warning":
          "var(--colors-feedback-warning-warning-500-main)",
        "container-stroke-warning-soft":
          "var(--colors-feedback-warning-warning-100)",
        "container-text-dark":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-700)",
        "container-text-dark-hover":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-800)",
        "container-text-disabled":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-50)",
        "container-text-gray":
          "var(--colors-nutral-gray-soft-gray-soft-500-main)",
        "container-text-light": "var(--colors-nutral-white-white-main)",
        "container-text-light-fixed": "var(--colors-nutral-white-white-main)",
        "container-text-negative":
          "var(--colors-feedback-negative-negative-500-main)",
        "container-text-negative-hover":
          "var(--colors-feedback-negative-negative-600)",
        "container-text-positive":
          "var(--colors-feedback-positive-positive-500-main)",
        "container-text-positive-hover":
          "var(--colors-feedback-positive-positive-600)",
        "container-text-primary":
          "var(--colors-brand-primary-primary-500-main)",
        "container-text-primary-hover":
          "var(--colors-brand-primary-primary-600)",
        "container-text-secondary":
          "var(--colors-brand-secondary-secondary-500-main)",
        "container-text-secondary-hover":
          "var(--colors-brand-secondary-secondary-600)",
        "container-text-tertiary":
          "var(--colors-brand-teritary-tertiary-500-main)",
        "container-text-tertiary-hover":
          "var(--colors-brand-teritary-tertiary-600)",
        "container-text-warning":
          "var(--colors-feedback-warning-warning-500-main)",
        "container-text-warning-hover":
          "var(--colors-feedback-warning-warning-600)",
        "container-hover-dark":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-600)",
        "container-hover-dark-soft":
          "var(--colors-nutral-gray-soft-gray-soft-100)",
        "container-hover-gray": "var(--colors-nutral-gray-soft-gray-soft-50)",
        "container-hover-light": "var(--colors-nutral-white-white-main)",
        "container-hover-negative":
          "var(--colors-feedback-negative-negative-600)",
        "container-hover-negative-soft":
          "var(--colors-feedback-negative-negative-50)",
        "container-hover-positive":
          "var(--colors-feedback-positive-positive-600)",
        "container-hover-positive-soft":
          "var(--colors-feedback-positive-positive-50)",
        "container-hover-primary": "var(--colors-brand-primary-primary-600)",
        "container-hover-primary-soft":
          "var(--colors-brand-primary-primary-50)",
        "container-hover-secondary":
          "var(--colors-brand-secondary-secondary-600)",
        "container-hover-secondary-soft":
          "var(--colors-brand-secondary-secondary-50)",
        "container-hover-tertiary": "var(--colors-brand-teritary-tertiary-600)",
        "container-hover-tertiary-soft":
          "var(--colors-brand-teritary-tertiary-50)",
        "container-hover-warning":
          "var(--colors-feedback-warning-warning-500-main)",
        "container-hover-warning-soft":
          "var(--colors-feedback-warning-warning-50)",
        "default-icon-dark":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-800)",
        "default-icon-disabled":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-50)",
        "default-icon-gray": "var(--colors-nutral-gray-soft-gray-soft-700)",
        "default-icon-light-fixed": "var(--colors-nutral-white-white-main)",
        "default-icon-negative":
          "var(--colors-feedback-negative-negative-500-main)",
        "default-icon-positive":
          "var(--colors-feedback-positive-positive-500-main)",
        "default-icon-primary": "var(--colors-brand-primary-primary-500-main)",
        "default-icon-secondary":
          "var(--colors-brand-secondary-secondary-500-main)",
        "default-icon-tertiary":
          "var(--colors-brand-teritary-tertiary-500-main)",
        "default-icon-warning":
          "var(--colors-feedback-warning-warning-500-main)",
        "icon-hover-dark":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-900)",
        "icon-hover-gray":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-600)",
        "icon-hover-negative": "var(--colors-feedback-negative-negative-600)",
        "icon-hover-positive": "var(--colors-feedback-positive-positive-600)",
        "icon-hover-primary": "var(--colors-brand-primary-primary-600)",
        "icon-hover-secondary": "var(--colors-brand-secondary-secondary-600)",
        "icon-hover-tertiary": "var(--colors-brand-teritary-tertiary-600)",
        "icon-hover-warning": "var(--colors-feedback-warning-warning-600)",
        "typography-body":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-900)",
        "typography-body-light": "var(--colors-nutral-white-white-main)",
        "typography-body-soft":
          "var(--colors-nutral-gray-soft-gray-soft-500-main)",
        "typography-caption": "var(--colors-brand-primary-primary-900)",
        "typography-caption-light": "var(--colors-nutral-white-white-main)",
        "typography-caption-soft":
          "var(--colors-nutral-gray-soft-gray-soft-500-main)",
        "typography-display":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-900)",
        "typography-display-light": "var(--colors-nutral-white-white-main)",
        "typography-heading":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-900)",
        "typography-heading-light": "var(--colors-nutral-white-white-main)",
        "typography-paragraph-soft":
          "var(--colors-nutral-gray-soft-gray-soft-700)",
        "typography-sub-heading":
          "var(--colors-nutral-gray-strong-dark-mode-gray-strong-400)",
        "typography-sub-heading-soft":
          "var(--colors-nutral-gray-soft-gray-soft-600)",
      },
    
    },
  },
  plugins: [],
};
