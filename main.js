//1-masala
// let I = 1;
// let V = 5;
// let X = 10;
// let L = 50;
// let C = 100;
// let D = 500;
// let M = 1000;
// let s = "CM";
// let count = 0;
// for (let i = 0; i < s.length; i++) {
//   if (s[i] == "I" && s[i + 1] == "V") {
//     count += -1;
//   } else if (s[i] == "I" && s[i + 1] == "X") {
//     count += -1;
//   } else if (s[i] == "X" && s[i + 1] == "L") {
//     count += -10;
//   } else if (s[i] == "X" && s[i + 1] == "C") {
//     count += -10;
//   } else if (s[i] == "C" && s[i + 1] == "D") {
//     count += -100;
//   } else if (s[i] == "C" && s[i + 1] == "M") {
//     count += -100;
//   } else if (s[i] == "I") {
//     count += I;
//   } else if (s[i] == "L") {
//     count += L;
//   } else if (s[i] == "V") {
//     count += V;
//   } else if (s[i] == "X") {
//     count += X;
//   } else if (s[i] == "M") {
//     count += M;
//   } else if (s[i] == "D") {
//     count += M;
//   }
// }
// console.log(count);

// 2-masala

//   3-masala

// let s="fly me   to   the moon";
// let res=s.split(" ");
// let count=res[res.length-1].length;
// console.log(count);

// 4-masala
// let srt = "A man, a plan, a cnal: Panama";
// let res = "";
// let res2 = "";
// for (let i = 0; i < srt.length; i++) {
//   //   console.log(srt[i]);
//   if (srt[i] !== " " && srt[i] !== "," && srt[i] !== ":") {
//     res += srt[i];
//     res = res.toLowerCase();
//   }
// }
// res2 = res.split("").reverse().join("");
// console.log(res == res2);
