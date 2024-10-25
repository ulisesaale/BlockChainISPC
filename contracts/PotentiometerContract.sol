// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract PotentiometerContract {
    int public potentiometerValue;

    event PotentiometerValueChanged(int newValue);

    function updateValue(int _value) public {
        potentiometerValue = _value;
        emit PotentiometerValueChanged(_value);
    }

    function getValue() public view returns (int) {
        return potentiometerValue;
    }
}
