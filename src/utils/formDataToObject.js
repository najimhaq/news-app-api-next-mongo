// lib/utils.js

/**
 * FormData কে সাধারণ Object-এ কনভার্ট
 */
export function formDataToObject(formData) {
  const obj = {};

  for (const [key, value] of formData.entries()) {
    // একই key-এ একাধিক ভ্যালু থাকলে অ্যারে করো
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }

  return obj;
}

// ব্যবহার
// const formData = new FormData(form);
// const data = formDataToObject(formData);
// { name: "রাহিম", hobby: ["reading", "gaming"] }
