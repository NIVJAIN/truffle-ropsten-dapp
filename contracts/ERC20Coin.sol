pragma solidity >=0.4.0 <0.9.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract ERC20Coin is ERC20 {
      constructor() ERC20("Scaffold ETH Token", "SET") {
        _mint(msg.sender, 55555 * 10 ** 18); //1000000000000000000000n
        // _mint(msg.sender, 5555 * 1 ** 1);
    }


    bytes32 public fooStore;
    string public setMessage = "Hello Solidity";
    // Public variable of type unsigned int to keep the number of counts
    uint256 public count = 0;

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


    // Function that increments our counter
    function increment() public {
        count += 1;
    }

    // Not necessary getter to get the count value
    function getCount() public view returns (uint256) {
        return count;
    }
     // Function that increments our counter
    function decrement() public {
        count--;
    }
}



// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

// contract MyToken is ERC20, Ownable {
//     constructor() ERC20("MyToken", "MTK") {
//         _mint(msg.sender, 1000 * 10 ** decimals());
//     }

//     function mint(address to, uint256 amount) public onlyOwner {
//         _mint(to, amount);
//     }
// }