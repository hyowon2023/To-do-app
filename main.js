// 1. 유저가 값을 입력한다
// 2. + 버튼을 클릭하면, 할일이 추가된다
// 3. delete 버튼을 누르면 할일이 삭제된다
// 4. check버튼을 누르면 할일이 삭제된다

// 4-1. check 버튼을 클릭하는 순간 true, false
// 4-2. true이면 끝난걸로 간주하고 밑줄 보여주기
// 4-3. false이면 안 끝난걸로 간주하고 그대로

// 5. 진행중 끝남 탭을 누르면, 언더바가 이동한다
// 6. 끝남탭은, 끝난 아이템만, 진행중탭은 진행준인 아이템만
// 7. 전체탭을 누르면 다시 전체 아이템으로 돌아옴
let taskInput = document.getElementById('task-input');
let addButton = document.getElementById('add-button');
addButton.addEventListener('click', addTask);

function addTask() {
  console.log('click');
}
