import { FormControl } from "@angular/forms";

export class FormValidators {

  static isValidDate(c: FormControl): { [key: string]: boolean } {
    let value = c.value;
    if (value && typeof value === "string") {
      let match = value.match(/^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/);
      if (!match) {
        return {'dateInvalid': true};
      }
      let date = new Date(`${match[3]}-${match[1]}-${match[2]}`);
      if (isNaN(date.getTime())) {
        return {'dateInvalid': true};
      }
    }
    return null;
  }

  static priorityRange(control: FormControl): any {
    if (control.value > 0) {
      return null;
    }

    return { range: true };
  }
}
