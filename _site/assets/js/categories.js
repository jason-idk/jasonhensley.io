const categories = { introduction: [{ url: `/posts/resume/`, date: `05 Oct 2023`, title: `Technical History`},{ url: `/posts/about_me/`, date: `05 Oct 2023`, title: `Introduction`},],about: [{ url: `/posts/resume/`, date: `05 Oct 2023`, title: `Technical History`},{ url: `/posts/about_me/`, date: `05 Oct 2023`, title: `Introduction`},],resume: [{ url: `/posts/resume/`, date: `05 Oct 2023`, title: `Technical History`},{ url: `/posts/about_me/`, date: `05 Oct 2023`, title: `Introduction`},],contact: [{ url: `/posts/resume/`, date: `05 Oct 2023`, title: `Technical History`},{ url: `/posts/about_me/`, date: `05 Oct 2023`, title: `Introduction`},],jekyll: [{ url: `/posts/syntax_ref/`, date: `06 Oct 2023`, title: `Jekyll Markdown Reference`},],documentation: [{ url: `/posts/rhel_7_boot_process/`, date: `06 Oct 2023`, title: `CentOS/RHEL 7 Boot Process Overview and Troubleshooting`},{ url: `/posts/syntax_ref/`, date: `06 Oct 2023`, title: `Jekyll Markdown Reference`},],markdown: [{ url: `/posts/syntax_ref/`, date: `06 Oct 2023`, title: `Jekyll Markdown Reference`},],linux: [{ url: `/posts/rhel_7_boot_process/`, date: `06 Oct 2023`, title: `CentOS/RHEL 7 Boot Process Overview and Troubleshooting`},],guide: [{ url: `/posts/rhel_7_boot_process/`, date: `06 Oct 2023`, title: `CentOS/RHEL 7 Boot Process Overview and Troubleshooting`},],troubleshooting: [{ url: `/posts/rhel_7_boot_process/`, date: `06 Oct 2023`, title: `CentOS/RHEL 7 Boot Process Overview and Troubleshooting`},], }

console.log(categories)

window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};