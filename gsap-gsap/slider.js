export function initSlider(element) {
    gsap.registerPlugin(ScrollTrigger);
    const SLIDER_LENGTH = 4000;

    let getOriginalPosition = (element) => {
        const rect = element.getBoundingClientRect();

        const computedStyle = window.getComputedStyle(element);
        const transform = computedStyle.transform;

        if (transform && transform !== 'none') {
            const matrix = new DOMMatrix(transform);

            const originalLeft = rect.left - matrix.m41;
            const originalTop = rect.top - matrix.m42;

            return {originalLeft, originalTop};
        } else {
            return {originalLeft: rect.left, originalTop: rect.top};
        }
    }

    let sections = gsap.utils.toArray(".slider__item");
    const items = Array.from(document.querySelectorAll(".slider__item"));
    const itemsContent = Array.from(document.querySelectorAll(".slider__item-content"));
    ScrollTrigger.matchMedia({
        "(max-width: 899px)": function () {
            items.forEach((item, index) => {
                ScrollTrigger.create({
                    trigger: item,
                    pin: true,
                    start: () => item.offsetHeight < (window.innerHeight - 100) ? 'top 30px' : `bottom ${window.innerHeight - 100}px`,
                    scrub: true,
                    onUpdate: (self) => {
                        item.style.opacity = (1 - self.progress);
                    }
                })
            });
        },
        "(min-width: 900px)": function () {
            let scrollTween = gsap.to(sections, {
                xPercent: -100 * (sections.length),
                ease: "none",
                scrollTrigger: {
                    trigger: ".container",
                    pin: true,
                    scrub: true,
                    end: `+=${SLIDER_LENGTH}`
                }
            });
            items.forEach((item, index) => {
                ScrollTrigger.create({
                    trigger: item,
                    containerAnimation: scrollTween,
                    start: () => index === 0 ? '-160px left' : '-130px left',
                    end: "+=" + window.innerWidth * (sections.length),
                    scrub: true,
                    animation: gsap.to(item, {x: window.innerWidth * (sections.length) + 14, ease: 'none'})
                })
            });
            itemsContent.forEach((item, index) => {
                ScrollTrigger.create({
                    trigger: item,
                    containerAnimation: scrollTween,
                    start: 'left 636px',
                    end: 'left 200px',
                    scrub: true,
                    animation: gsap.to(item, {minWidth: '530px', ease: 'none'}),
                    onUpdate: (self) => {
                        item.parentNode.style.marginRight = `${150 * self.progress}px`;
                        if (self.progress > 0) {
                            item.parentNode.style.borderLeftColor = 'transparent';
                        } else {
                            item.parentNode.style.borderLeftColor = 'var(--decor-main-color)';
                        }
                        if (item.querySelector('.slider__item-sub')) {
                            item.querySelector('.slider__item-sub').style.opacity = `${1 * self.progress}`;
                        }
                        if (index > 0) {
                            item.parentNode.previousSibling.previousSibling.style.opacity = (1 - self.progress);
                        }
                        if (index > 1) {
                            item.parentNode.style.marginLeft = `${-150 * self.progress}px`;
                        }
                        // if (item.parentNode.id) {
                        //     let selector = `[href='#${item.parentNode.id}']`
                        //     document.querySelector('.slider__nav-item-link--active').classList.remove('slider__nav-item-link--active');
                        //     document.querySelector(selector).classList.add('slider__nav-item-link--active');
                        // }
                    },
                })
            })
            document.querySelectorAll(".slider__nav-item-link").forEach(anchor => {
                anchor.addEventListener("click", (e) => {
                    e.preventDefault();
                    if (e.target.classList.contains('slider__nav-item-link--active')) {
                        return;
                    }
                    document.querySelector('.slider__nav-item-link--active').classList.remove('slider__nav-item-link--active');
                    e.target.classList.add('slider__nav-item-link--active');
                    let targetElem = document.querySelector(e.target.getAttribute("href"));
                    let targetElemPos = getOriginalPosition(targetElem);
                    let lastItemOffsetLeft = getOriginalPosition(document.querySelector('.slider__item:last-child')).originalLeft;
                    let targetElemOffsetLeft = targetElemPos.originalLeft + (targetElem.querySelector('.slider__item-content').offsetWidth - targetElem.offsetWidth);
                    let percentageOffsetLeftTarget = targetElemOffsetLeft / lastItemOffsetLeft;
                    gsap.to(window, {duration: 2, scrollTo: (SLIDER_LENGTH * percentageOffsetLeftTarget - 157)});
                });
            });
            let isDragging = false;
            let startX;
            let scrollStart;
            let container = document.querySelector('.slider__main');
            container.addEventListener('mousedown', (e) => {
                isDragging = true;
                startX = e.clientX;
                scrollStart = window.scrollX || document.documentElement.scrollLeft;
                e.preventDefault();
            });

            document.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                let deltaX = e.clientX - startX;
                let scrollX = document.documentElement.scrollTop + scrollStart - deltaX;
                gsap.to(window, {duration: 0.3, scrollTo: scrollX, overwrite: true});
            });

            document.addEventListener('mouseup', () => {
                isDragging = false;
            });
        }
    })
}
