// You're creating a new programming language with some exciting new features! Any programming language can check if two strings are matching, but you'd like yours to be able to check if they're almost matching. More specifically, we'll say two strings are almost matching if they're equal in length and all of their corresponding characters are the same except for one. For example, "cat" and "bat" are almost matching, but "cat" and "dog" are not.

// For the sake of efficiency, you're planning on testing the feature by using a single string and comparing its substrings. Given a string s and an integer k, your task is to find the number of pairs of substrings of s that are almost matching but differ at their kth character (0-based). It's necessary that the length of both substrings exceeds k (otherwise the strings wouldn't have a kth character).

// Also note that substrings are determined by their indices, so there could potentially be multiple instances of the same word. For example, in the word "ingratiating" the substring "ing" beginning at index 0 is considered distinct from the one at index 9 (and there are also two distinct "ati" substrings).

// Example
// For s = "abacaba" and k = 1, the output should be
// substringPairs(s, k) = 8.

// Using i and j to represent the start and end indices of the first substrings, and l and m to represent the indices of the second substring, the 8 pairs are:

// ("aba", "aca") - i = 0, j = 2, l = 2, m = 4;
// ("aba", "aca") - i = 4, j = 6, l = 2, m = 4;
// ("aca", "aba") - i = 2, j = 4, l = 0, m = 2;
// ("aca", "aba") - i = 2, j = 4, l = 4, m = 6;
// ("ac", "ab") - i = 2, j = 3, l = 0, m = 1;
// ("ac", "ab") - i = 2, j = 3, l = 4, m = 5;
// ("ab", "ac") - i = 0, j = 1, l = 2, m = 3;
// ("ab", "ac") - i = 4, j = 5, l = 2, m = 3.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s

// A string consisting only of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s.length ≤ 200.

// [input] integer k

// Guaranteed constraints:
// 0 ≤ k < s.length.

// [output] integer

// The amount of different pairs as described above.

// [JavaScript] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

// JavaScript
// Node.js v14.16.1
// 1234
// function substringPairs(s, k) {

// }

// TESTS
// CUSTOM TESTS
// MORE