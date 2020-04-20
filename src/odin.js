function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

function cipher(shift, string) {
  const st = string.split('');
  let newStr = '';
  st.forEach((x) => {
    if (x.charCodeAt() >= 97 && x.charCodeAt() <= 122) {
      if (x.charCodeAt() + shift > 122) {
        newStr += String.fromCharCode(x.charCodeAt() + shift - 26);
      } else {
        newStr += String.fromCharCode(x.charCodeAt() + shift);
      }
    } else if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
      if (x.charCodeAt() + shift > 90) {
        newStr += String.fromCharCode(x.charCodeAt() + shift - 26);
      } else {
        newStr += String.fromCharCode(x.charCodeAt() + shift);
      }
    } else {
      newStr += String.fromCharCode(x.charCodeAt());
    }
  });
  return newStr;
}

function averageF(arr) {
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum / arr.length;
}

function analyze(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  const average = averageF(arr);
  return { average, min, max, length };
}

export { capitalize, reverseString, cipher, analyze };
