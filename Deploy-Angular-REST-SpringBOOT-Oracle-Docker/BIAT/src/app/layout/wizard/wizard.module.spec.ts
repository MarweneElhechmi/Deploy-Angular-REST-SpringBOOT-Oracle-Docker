import { WizardModule } from "./wizard.module";

describe('WizardModule', () => {
    let wizardModule: WizardModule;

    beforeEach(() => {
        wizardModule = new WizardModule();
    });

    it('should create an instance', () => {
        expect(wizardModule).toBeTruthy();
    });
});
