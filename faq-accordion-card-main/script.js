let btnAccordionTag = document.querySelectorAll(".btn-accordionQ");

btnAccordionTag.forEach((el) => {
  el.addEventListener("click", (event) => {
    let toggleCollapseTag = el.nextElementSibling;

    if (!el.classList.contains("open")) {
      toggleCollapseTag.style.display = "block";
      let toggleCollapseHeight = toggleCollapseTag.clientHeight;

      setTimeout(() => {
        toggleCollapseTag.style.height = toggleCollapseHeight + "px";
        toggleCollapseTag.style.display = "";
      }, 1);

      toggleCollapseTag.classList = "accordion-toggle collapsing";

      setTimeout(() => {
        toggleCollapseTag.classList = "accordion-toggle collapse open";
      }, 500);
    } else {
      toggleCollapseTag.classList = "accordion-toggle collapsing";
      setTimeout(() => {
        toggleCollapseTag.classList = "accordion-toggle collapse";
      }, 1);

      setTimeout(() => {
        toggleCollapseTag.classList = "accordion-toggle collapse";
        toggleCollapseTag.style.height = "";
      });
    }

    el.classList.toggle("open");
  });
});
