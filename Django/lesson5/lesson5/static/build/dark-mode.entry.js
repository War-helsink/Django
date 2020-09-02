import { r as registerInstance, h } from './index-010714d3.js';

const darkModeCss = "body.dark{--ion-color-primary:#428cff;--ion-color-primary-rgb:66, 140, 255;--ion-color-primary-contrast:#ffffff;--ion-color-primary-contrast-rgb:255, 255, 255;--ion-color-primary-shade:#3a7be0;--ion-color-primary-tint:#5598ff;--ion-color-secondary:#50c8ff;--ion-color-secondary-rgb:80, 200, 255;--ion-color-secondary-contrast:#ffffff;--ion-color-secondary-contrast-rgb:255, 255, 255;--ion-color-secondary-shade:#46b0e0;--ion-color-secondary-tint:#62ceff;--ion-color-tertiary:#6a64ff;--ion-color-tertiary-rgb:106, 100, 255;--ion-color-tertiary-contrast:#ffffff;--ion-color-tertiary-contrast-rgb:255, 255, 255;--ion-color-tertiary-shade:#5d58e0;--ion-color-tertiary-tint:#7974ff;--ion-color-success:#2fdf75;--ion-color-success-rgb:47, 223, 117;--ion-color-success-contrast:#000000;--ion-color-success-contrast-rgb:0, 0, 0;--ion-color-success-shade:#29c467;--ion-color-success-tint:#44e283;--ion-color-warning:#ffd534;--ion-color-warning-rgb:255, 213, 52;--ion-color-warning-contrast:#000000;--ion-color-warning-contrast-rgb:0, 0, 0;--ion-color-warning-shade:#e0bb2e;--ion-color-warning-tint:#ffd948;--ion-color-danger:#ff4961;--ion-color-danger-rgb:255, 73, 97;--ion-color-danger-contrast:#ffffff;--ion-color-danger-contrast-rgb:255, 255, 255;--ion-color-danger-shade:#e04055;--ion-color-danger-tint:#ff5b71;--ion-color-dark:#f4f5f8;--ion-color-dark-rgb:244, 245, 248;--ion-color-dark-contrast:#000000;--ion-color-dark-contrast-rgb:0, 0, 0;--ion-color-dark-shade:#d7d8da;--ion-color-dark-tint:#f5f6f9;--ion-color-medium:#989aa2;--ion-color-medium-rgb:152, 154, 162;--ion-color-medium-contrast:#000000;--ion-color-medium-contrast-rgb:0, 0, 0;--ion-color-medium-shade:#86888f;--ion-color-medium-tint:#a2a4ab;--ion-color-light:#222428;--ion-color-light-rgb:34, 36, 40;--ion-color-light-contrast:#ffffff;--ion-color-light-contrast-rgb:255, 255, 255;--ion-color-light-shade:#1e2023;--ion-color-light-tint:#383a3e}.ios body.dark{--ion-background-color:#000000;--ion-background-color-rgb:0, 0, 0;--ion-text-color:#ffffff;--ion-text-color-rgb:255, 255, 255;--ion-color-step-50:#0d0d0d;--ion-color-step-100:#1a1a1a;--ion-color-step-150:#262626;--ion-color-step-200:#333333;--ion-color-step-250:#404040;--ion-color-step-300:#4d4d4d;--ion-color-step-350:#595959;--ion-color-step-400:#666666;--ion-color-step-450:#737373;--ion-color-step-500:#808080;--ion-color-step-550:#8c8c8c;--ion-color-step-600:#999999;--ion-color-step-650:#a6a6a6;--ion-color-step-700:#b3b3b3;--ion-color-step-750:#bfbfbf;--ion-color-step-800:#cccccc;--ion-color-step-850:#d9d9d9;--ion-color-step-900:#e6e6e6;--ion-color-step-950:#f2f2f2;--ion-toolbar-background:#0d0d0d;--ion-item-background:#1c1c1c;--ion-item-background-activated:#313131}.md body.dark{--ion-background-color:#121212;--ion-background-color-rgb:18, 18, 18;--ion-text-color:#ffffff;--ion-text-color-rgb:255, 255, 255;--ion-border-color:#222222;--ion-color-step-50:#1e1e1e;--ion-color-step-100:#2a2a2a;--ion-color-step-150:#363636;--ion-color-step-200:#414141;--ion-color-step-250:#4d4d4d;--ion-color-step-300:#595959;--ion-color-step-350:#656565;--ion-color-step-400:#717171;--ion-color-step-450:#7d7d7d;--ion-color-step-500:#898989;--ion-color-step-550:#949494;--ion-color-step-600:#a0a0a0;--ion-color-step-650:#acacac;--ion-color-step-700:#b8b8b8;--ion-color-step-750:#c4c4c4;--ion-color-step-800:#d0d0d0;--ion-color-step-850:#dbdbdb;--ion-color-step-900:#e7e7e7;--ion-color-step-950:#f3f3f3;--ion-item-background:#1a1b1e}ion-item{--transition:none}";

const DarkMode = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.state = false;
    }
    darkMode(ev) {
        document.body.classList.toggle('dark', ev.detail.checked);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        prefersDark.addListener((e) => ev.detail.checked = e.matches);
    }
    render() {
        return [
            h("ion-item", { class: "ion-no-margin", color: "dark", lines: "none" }, h("ion-icon", { slot: "start", name: "moon" }), h("ion-toggle", { class: "ion-no-margin", color: "medium", onIonChange: ev => this.darkMode(ev), slot: "end" }))
        ];
    }
};
DarkMode.style = darkModeCss;

export { DarkMode as dark_mode };
