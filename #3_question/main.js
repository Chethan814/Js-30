let expect = function(val){
  let obj = {};
  function toBe(val1) {
    if (val === val1) {
      obj.value = true;
      return obj;
    } else {
      obj.error = "Not Equal";
      return obj;
    }
  }
  function notToBe(val1) {
    if (val !== val1) {
      obj.value = true;
      return obj;
    } else {
      obj.error = "Equal";
      return obj;
    }
  }
};

// let expect = function(val) {
//     return {
//       toBe: function(val1) {
//         if (val === val1) {
//           return true;
//         } else {
//           throw new Error("Not Equal");
//         }
//       },
//       notToBe: function(val1) {
//         if (val !== val1) {
//           return true;
//         } else {
//           throw new Error("Equal");
//         }
//       }
//     };
//   };

console.log(expect(5).toBe(5));
console.log(expect(5).toBe(null));
console.log(expect(5).notToBe(null));
