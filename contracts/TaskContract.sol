// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @author  Nischal Shakya
 * @title   A smart contract for to-do app
 * @notice  You can use this contract for the basic to-do functionality
 */
contract TaskContract {
    event AddTask(address recipient, uint16 taskId);
    event DeleteTask(uint16 taskId, bool isDeleted);
    event UpdateTask(
        address recipient,
        string taskTitle,
        string taskDescription
    );

    struct Task {
        uint16 taskId;
        string taskTitle;
        string taskDescription;
        bool isDeleted;
    }

    Task[] private tasks;

    mapping(uint16 => address) taskToOwner;

    /**
     * @notice  Returns all the to-dos
     * @dev     Return array of Task[].
     * @return  Returns all the to-dos
     */
    function getTasks() external view returns (Task[] memory) {
        Task[] memory tempTasks = new Task[](tasks.length);
        uint16 counter = 0;
        for (uint16 i = 0; i < tasks.length; i++) {
            if (taskToOwner[i] == msg.sender && !tasks[i].isDeleted) {
                tempTasks[counter] = tasks[i];
                counter++;
            }
        }

        Task[] memory actualTasks = new Task[](counter);
        for (uint16 i = 0; i < counter; i++) {
            actualTasks[i] = tempTasks[i];
        }
        return actualTasks;
    }

    /**
     * @notice  Adds new to-do
     * @param   _taskTitle The title of the to-do
     * @param   _taskDescription The description of the to-do  .
     * @param   _isDeleted Indicates whether the to-do is deleted or not
     */
    function addTask(
        string memory _taskTitle,
        string memory _taskDescription,
        bool _isDeleted
    ) external {
        uint16 _taskId = uint16(tasks.length);
        tasks.push(
            Task({
                taskId: _taskId,
                taskTitle: _taskTitle,
                taskDescription: _taskDescription,
                isDeleted: _isDeleted
            })
        );
        taskToOwner[_taskId] = msg.sender;
        emit AddTask(msg.sender, _taskId);
    }

    /**
     * @notice  Get the specified to-do
     * @param   _taskId  The unique identifier of the to-do
     * @return  Task according to the specified _taskId  .
     */
    function getTask(uint16 _taskId) external view returns (Task memory) {
        return tasks[_taskId];
    }

    /**
     * @notice  Update the specified to-do
     * @param   _taskId  The unique identifier of the to-do
     * @param   _taskTitle The title of the to-do
     * @param   _taskDescription The description of the to-do  .
     */
    function updateTask(
        uint16 _taskId,
        string memory _taskTitle,
        string memory _taskDescription
    ) external {
        tasks[_taskId].taskTitle = _taskTitle;
        tasks[_taskId].taskDescription = _taskDescription;
        emit UpdateTask(msg.sender, _taskTitle, _taskDescription);
    }

    /**
     * @notice  Deletes the specific task
     * @param   _taskId  The unique identifier of the to-do
     */
    function deleteTask(uint16 _taskId) external {
        if (taskToOwner[_taskId] == msg.sender) {
            tasks[_taskId].isDeleted = true;
            emit DeleteTask(_taskId, true);
        }
    }
}
