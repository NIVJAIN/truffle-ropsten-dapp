// pragma solidity ^0.4.23;
// pragma solidity >=0.4.20;
pragma solidity >=0.4.22 <0.9.0;
contract HelloWorld {
    function sayHello() public pure returns(string memory){
        return("hello world");
    }
}