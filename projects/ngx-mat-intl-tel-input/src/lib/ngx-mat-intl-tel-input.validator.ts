import {FormControl} from '@angular/forms';
import {parsePhoneNumber, ParseError, PhoneNumber} from 'libphonenumber-js';

export const phoneNumberValidator = (control: FormControl) => {
  const error = {validatePhoneNumber: true};
  let numberInstance: PhoneNumber;
  if (control.value && control.value) {
    try {
      numberInstance = parsePhoneNumber(control.value);
      console.log("control :: ", control);
    } catch (e) {
      control.setValue('');
      return error;
    }

    if (numberInstance && !numberInstance.isValid()) {
      control.setValue('');
      if (!control.touched) control.markAsTouched();
      return error;
    }
  }
  return;
};
