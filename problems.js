***** longestCommonPrefix *****

var longestCommonPrefix = function(arr) {
     //edge case if is the input array is empty
     if (arr.length === 0) return '';
     
     //create longest prefix variable and set it to the entire first word
     let longPre = arr[0];

     //loop through all the strings in the array starting at index 1
     for(let i = 1; i < arr.length; i++) 
     
     //while the next string isnt a prefix of the word before it
        while (arr[i].indexOf(longPre) !=0) {
        
        //remove the last letter off the string and check again // repeat
        longPre = longPre.substring(0, longPre.length - 1);
        
        //EDGE CASE: If you pull all letters fo the prefix, no common prefix, return '';
        if (longPre.length === 0) return '';
        }
        
    //return the longest prefix
    return longPre;
}

longestCommonPrefix(["flower","flow","flight"])//"fl"

*****  
