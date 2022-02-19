// pragma solidity ^0.4.23;
// pragma solidity >=0.4.20;
pragma solidity >=0.4.22 <0.9.0;
contract HelloWorld {
    bytes32 public fooStore;
    string public setMessage = "Hello Solidity";
    function sayHello() public pure returns(string memory){
        return("hello world");
    }
    function setText(string memory _setText) public {
        setMessage = _setText;
    }
    function getText() public view returns(string memory) {
        return(setMessage);
    }
      // event logFoo(bytes32 foo);
    function sendFoo(bytes32 foo) public {
        fooStore= foo;
        // logFoo(foo);
    }
    function getFoo() public view returns(bytes32) {
        return(fooStore);
    }
}