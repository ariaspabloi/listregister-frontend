export const rutValidator = (value) => {
  if (value.length <= 1) return 'Ingrese un rut'
  const pattern = /^\d{7,8}-[0-9Kk]$/;
  if(!pattern.test(value)) return 'Formato incorrecto'

  value = value.replace(/^0+|[^0-9kK]+/g, '').toUpperCase()

  const bodyRut = value.slice(0, -1);
  let checkDigit = value.slice(-1).toUpperCase();
  checkDigit = checkDigit == "K" ? 10 : checkDigit;
  checkDigit = checkDigit == 0 ? 11 : checkDigit;

  let sum = 0;
  let multiple = 2;
  
  for (let i = 1; i <= bodyRut.length; i++) {
    let index = multiple * value.charAt(bodyRut.length - i);
    sum = sum + index;
    if (multiple < 7) {
      multiple = multiple + 1;
    } else {
      multiple = 2;
    }
  }
  const calculatedDigit = 11 - (sum % 11);

  if (calculatedDigit != checkDigit) return 'Digito verificador invalido'

  return ''
}
