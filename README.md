# mEncDec

#### How to use mencdec
##### Steps
- Add this js file to your webpage
    ```html
    <script src="https://cdn.jsdelivr.net/gh/mohan-askan/mencdec@master/mEncDec.js"></script>
    ```
- To encrypt a string
    ```html
    <script type="text/javascript">
       var mencdec = new mEncDec();
       var encrypt = mencdec.encrypt("test123");
       console.log(encrypt);
    </script>
    ```
- To decrypt a string
    ```html
    <script type="text/javascript">
       var mencdec = new mEncDec();
       var encrypt = mencdec.encrypt("test123");
       var decrypt = mencdec.decrypt(encrypt);
       console.log(decrypt);
    </script>
    ```
###### Note: Do not trim the encrypted string.
