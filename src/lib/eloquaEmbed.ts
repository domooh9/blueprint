type LiveValidationType = new (
  element: HTMLElement,
  options: { validMessage: string; onlyOnBlur: boolean; wait: number; isPhoneField: boolean }
) => {
  add: (rule: any, config: Record<string, any>) => void;
};

type ValidateType = {
  Custom: any;
  Length: any;
  Format: any;
  Presence: any;
};

const emailPattern =
  /(^[A-Z0-9!#\$%&'\*\+\-\/=\?\^_`\{\|\}~][A-Z0-9!#\$%&'\*\+\-\/=\?\^_`\{\|\}~\.]{0,62}@(([A-Z0-9](?:[A-Z0-9\-]{0,61}[A-Z0-9])?)(\.[A-Z0-9](?:[A-Z0-9\-]{0,61}[A-Z0-9])?)+)$)/i;
const emailInvalidPattern = /\.\.|\.@/i;
const urlPattern = /(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2,63}/i;
const htmlPattern = /(<([^>]+)>)/gi;

export function initEloquaForm(form: HTMLFormElement) {
  const win = window as any;
  const LiveValidation = win.LiveValidation as LiveValidationType | undefined;
  const Validate = win.Validate as ValidateType | undefined;

  if (!LiveValidation || !Validate) {
    return;
  }

  const fullName = form.querySelector<HTMLElement>('input[name="fullName1"]');
  const phone = form.querySelector<HTMLElement>('input[name="phoneNumber1"]');
  const email = form.querySelector<HTMLElement>('input[name="emailAddress"]');
  const message = form.querySelector<HTMLElement>('textarea[name="paragraphText"]');

  if (fullName) {
    const lv = new LiveValidation(fullName, {
      validMessage: "",
      onlyOnBlur: false,
      wait: 300,
      isPhoneField: false,
    });
    lv.add(Validate.Custom, {
      against: (value: string) => !value.match(urlPattern),
      failureMessage: "Value must not contain any URL's",
    });
    lv.add(Validate.Custom, {
      against: (value: string) => !value.match(htmlPattern),
      failureMessage: "Value must not contain any HTML",
    });
    lv.add(Validate.Length, {
      tooShortMessage: "Invalid length for field value",
      tooLongMessage: "Invalid length for field value",
      minimum: 0,
      maximum: 35,
    });
  }

  if (phone) {
    // LiveValidation doesn't support type="tel", temporarily switch to "text"
    const phoneInput = phone as HTMLInputElement;
    const originalType = phoneInput.type;
    phoneInput.type = "text";
    const lv = new LiveValidation(phone, {
      validMessage: "",
      onlyOnBlur: false,
      wait: 300,
      isPhoneField: false,
    });
    phoneInput.type = originalType;
    lv.add(Validate.Custom, {
      against: (value: string) => !value.match(urlPattern),
      failureMessage: "Value must not contain any URL's",
    });
    lv.add(Validate.Custom, {
      against: (value: string) => !value.match(htmlPattern),
      failureMessage: "Value must not contain any HTML",
    });
  }

  if (email) {
    const lv = new LiveValidation(email, {
      validMessage: "",
      onlyOnBlur: false,
      wait: 300,
      isPhoneField: false,
    });
    lv.add(Validate.Format, {
      pattern: emailPattern,
      failureMessage: "A valid email address is required",
    });
    lv.add(Validate.Format, {
      pattern: emailInvalidPattern,
      failureMessage: "A valid email address is required",
      negate: "true",
    });
    lv.add(Validate.Presence, {
      failureMessage: "This field is required",
    });
  }

  if (message) {
    const lv = new LiveValidation(message, {
      validMessage: "",
      onlyOnBlur: false,
      wait: 300,
      isPhoneField: false,
    });
    lv.add(Validate.Custom, {
      against: (value: string) => !value.match(urlPattern),
      failureMessage: "Value must not contain any URL's",
    });
    lv.add(Validate.Custom, {
      against: (value: string) => !value.match(htmlPattern),
      failureMessage: "Value must not contain any HTML",
    });
  }
}
