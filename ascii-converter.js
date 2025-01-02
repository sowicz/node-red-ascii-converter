module.exports = function(RED) {
  function asciiConverter(config) {
      RED.nodes.createNode(this,config);

      this.entryQuantity = parseInt(config.entryQuantity);
      this.lastQuantity = parseInt(config.lastQuantity);
      this.inputType = config.inputType;

      var node = this;

      function decimalToAscii(array, entrySkip = 0, lastSkip = 0, type) {
        // Validate that the input is an array
        if (!Array.isArray(array)) {
          throw new TypeError("The input must be an array of decimal or hexadecimal numbers.");
        }
        // Validate the type parameter
        if (type !== "DEC" && type !== "HEX") {
          throw new TypeError('The "type" parameter must be either "DEC" or "HEX".');
        }
      
        // Skip the first `entrySkip` and last `lastSkip` positions
        const filteredArray = array.slice(entrySkip, array.length - lastSkip);
      
        // Convert numbers based on the type ("DEC" or "HEX")
        return filteredArray
          .map(num => {
            const value = type === "HEX" ? parseInt(num, 16) : num;
            return String.fromCharCode(value);
          })
          .join(''); 
      }

      node.on('input', function(msg) {
        try {
          msg.payload = decimalToAscii(msg.payload, node.entryQuantity, node.lastQuantity, node.inputType);
          node.send(msg);
        } catch (error) {
          node.error(error.message);
        }
      });
  }
  RED.nodes.registerType("ascii-converter",asciiConverter);
}