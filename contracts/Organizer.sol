//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Organizer {
    mapping(address => mapping(string => bool)) public taskListOnAddress;

    event TaskAdded(address _owner, string _task, bool _status);
    event TaskComplete(address _owner, string _task);


    function addTask(string memory _task) external {
        require(!taskListOnAddress[msg.sender][_task], "This task alredy complete!");
        taskListOnAddress[msg.sender][_task] = false;

        emit TaskAdded(msg.sender, _task, taskListOnAddress[msg.sender][_task]);
    }

    function taskComplete(string memory _task) external {
        delete taskListOnAddress[msg.sender][_task];

        emit TaskComplete(msg.sender, _task);
    }
}