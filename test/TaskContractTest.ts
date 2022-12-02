import { expect } from "chai";
import { ethers } from "hardhat";
import { TaskContract, TaskContract__factory } from "../typechain-types";

describe("TaskContract", async function () {
  let taskContractFactory: TaskContract__factory;
  let taskContract: TaskContract;
  let owner: any;
  beforeEach(async function () {
    taskContractFactory = await ethers.getContractFactory("TaskContract");
    [owner] = await ethers.getSigners();
    taskContract = await taskContractFactory.deploy();
    await taskContract.deployed();

    await taskContract.addTask("Assignment", "Complete it", false);
  });

  it("Should get all the tasks", async function () {
    const getTasks = await taskContract.getTasks();
    expect(getTasks.length).to.equal(1);
  });

  it("Should add a new to do", async function () {
    const addTask = await taskContract.addTask(
      "homework",
      "Should do it",
      false
    );
    expect(addTask)
      .to.emit(taskContract, "AddTask")
      .withArgs(owner.address, "1");
  });

  it("Should update a task", async function () {
    const updateTask = await taskContract.updateTask(
      0,
      "Dengue",
      "No Vaccine available"
    );
    expect(updateTask)
      .to.emit(taskContract, "UpdateTask")
      .withArgs(owner.address, "Dengue", "No Vaccine available");
  });

  it("Should get a task by id", async function () {
    const getTask = await taskContract.getTask(0);
    expect(getTask.taskTitle).to.equal("Assignment");
  });

  it("Should delete a task", async function () {
    const deleteTask = await taskContract.deleteTask(0);
    expect(deleteTask).to.emit(taskContract, "DeleteTask").withArgs(0, true);
  });
});
