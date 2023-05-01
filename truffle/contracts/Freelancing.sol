//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Freelancing {

struct Project{
  uint    id;
  string  name;
  uint    price;
  Status  status;
  address employer;
  address freelancer;
}
mapping(uint=>Project) public projects;
mapping(address=>uint) public employerProject;
uint public numProjects = 0;
enum Status{Done,NotDone,Closed,Open}

// events
event AddProject(uint projectId,string name,uint price);
event PickProject(uint projectId,address freelancer);
event CommitProject(uint projectId,address freelancer);
event CloseProject(uint projectId,address employer,address freelancer,uint price);
event Withdraw(address employer,uint price);

// modifiers
modifier verifyCaller (address _address) { require (msg.sender == _address); _;}
modifier open(uint _id){require(projects[_id].status==Status.Open); _;}
modifier done(uint _id){require(projects[_id].status==Status.Done); _;}



//WHEN FREELANCER WILL FILL FORM A PROJECT WITH HIS NAME WILL BE CREATED
function addProject(string memory _name , uint _price) public {
uint _id=numProjects;
projects[_id] = Project({id:_id,name:_name,price:_price,status:Status.Open,employer:address(0),freelancer:msg.sender});
 numProjects=numProjects+1;
 emit AddProject(_id,_name,_price);

}

function getAssociatedProjects() public view returns (Project memory){
    require (employerProject [msg.sender]!=0 );
    return projects[employerProject[msg.sender]];
}

function getProjects() public view returns (Project[] memory){
    Project[] memory people = new Project[](numProjects);
    for(uint i = 0; i < numProjects; i++){
        people[i] = projects[i];
    }
    return people;

}

//WHEN EMPLOYEE IS CHOOSING FREELANCER THAT MEANS HE WILL PAY THE AMOUNT TO CONTRACT
function pickProject(uint _id)public open(_id) payable returns(uint){
require(msg.value==projects[_id].price, "Insufficient Price");
projects[_id].employer=msg.sender;
projects[_id].status=Status.NotDone;
employerProject[msg.sender] = _id;
emit PickProject(_id,msg.sender);
return _id;
}


//WHEN FREELANCER WILL DONE WITH THE PROJECT HE WILL COMMIT THE WORK
function commitProject(uint _id)public verifyCaller(projects[_id].freelancer){
  projects[_id].status=Status.Done;
  emit CommitProject(_id,msg.sender); 
}


//WHEN EMPLOYER GOT THE PROJECT HE WILL CLOSE THE PROJECT
function closeProject(uint _id)public done(_id) payable verifyCaller(projects[_id].employer){

projects[_id].status=Status.Closed;
(bool success, )=projects[_id].freelancer.call{value:(projects[_id].price)}("");
require (success);
 
emit CloseProject(_id,projects[_id].employer,projects[_id].freelancer,projects[_id].price);

}

function returnProject(uint _id)public view returns(string memory name,uint id,uint price,uint status,address employer,address freelancer){

name=projects[_id].name;
id=projects[_id].id;
price=projects[_id].price;
status=uint(projects[_id].status);
employer=projects[_id].employer;
freelancer=projects[_id].freelancer;
}

}