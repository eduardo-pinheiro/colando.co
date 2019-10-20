function openCourseModal(index) {
    let domNode = document.querySelector(`[data-course-index='${index}']`);
    domNode.style = "display: flex!important";
}

function closeCourseModal(index) {
    let domNode = document.querySelector(`[data-course-index='${index}']`);
    domNode.style = "display: inherit";
}

function openUniversityModal(index) {
    let domNode = document.querySelector(`[data-university-index='${index}']`);
    domNode.style = "display: flex!important";
}

function closeUniversityModal(index) {
    let domNode = document.querySelector(`[data-university-index='${index}']`);
    domNode.style = "display: inherit";
}

function closeModalLead() {
    let domNode = document.querySelector('.get-lead-modal');
    domNode.style = "display: inherit";
}

function openModalLead() {
    let domNode = document.querySelector('.get-lead-modal');
    domNode.style = "display: flex!important";
}
