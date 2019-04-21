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
        var mencdec = new mEncDec("test123");
        var encrypt = mencdec.mencrypt();
        console.log(encrypt); // Output: æ÷áæ£ ¡
    </script>
    ```
- To decrypt a string
    ```html
    <script type="text/javascript">
        var mencdec = new mEncDec("æ÷áæ£ ¡");
        var decrypt = mencdec.mdecrypt();
        console.log(decrypt); // Output: test123
    </script>
    ```
###### Note: Do not trim the encrypted string.
