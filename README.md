# Node-RED ASCII Converter

A custom Node-RED node that converts arrays of decimal or hexadecimal numbers into their ASCII character representation. This node is useful for applications requiring data translation, such as decoding communication protocols or processing encoded messages.

## Features
- Converts arrays of decimal or hexadecimal numbers into ASCII strings.
- Skips configurable numbers of elements from the beginning and end of the input array.
- Supports both decimal (`DEC`) and hexadecimal (`HEX`) input types.
- Provides robust error handling for invalid inputs.

## Installation
To install this package in your Node-RED environment, run:

```bash
npm i @ksowa/node-red-array-ascii-converter

```

# Usage

### Inputs
Payload: An array of numbers (either decimal or hexadecimal) to be converted to ASCII characters.


### Configuration Options
- Entry Quantity: The number of elements to skip from the beginning of the input array.
- Last Quantity: The number of elements to skip from the end of the input array.
- Input Type: Select either DEC (decimal) or HEX (hexadecimal) to indicate the format of the input array.


### Outputs
Payload: A string containing the ASCII characters corresponding to the input array.



## Example

### Scenario
You have an array of numbers representing ASCII codes, and you want to convert them into a readable string. For example:
- Input: `[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]`  
  - Decimal ASCII values for `"Hello World"`.
- Configuration:  
  - Skip the first 2 numbers.  
  - Skip the last 2 numbers.  
  - Treat the numbers as decimal (`DEC`).  


### Example Node Configuration
1. Drag and drop the **ASCII Converter** node into your Node-RED flow.
2. Configure the node with the following settings:
   - **Entry Quantity**: `2` (Skip the first 2 elements).
   - **Last Quantity**: `2` (Skip the last 2 elements).
   - **Input Type**: `DEC`.


### Input Example
Use an **Inject** node to send the following payload:

```json
{
  "payload": [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
}
```



### Output Example
Use an **Debug** node to show output of the function in msg.payload:

```json
{
  "payload": "llo Wor"
}
```

### Explanation
- Original Array: [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100].
- Skip First 2 Elements: [108, 108, 111, 32, 87, 111, 114, 108, 100].
- Skip Last 2 Elements: [108, 108, 111, 32, 87, 111].
- Convert to ASCII: "llo Wor".



### Let me know if you need additional formatting or sections! 😊