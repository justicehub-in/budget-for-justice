import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Flip } from 'gsap/dist/Flip';

export function ListingHeader(element) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Flip);

  const bar = document.querySelector(element),
    text = bar.querySelector('p'),
    input = bar.querySelector('input');

  ScrollTrigger.create({
    start: 1,
    end: 99999,
    onEnter: () => {
      const state = Flip.getState([bar, input], { props: 'opacity' });
      Flip.makeAbsolute(text);
      gsap.to(text, { y: '-=60', autoAlpha: 0, overwrite: true });
      Flip.from(state);
    },
    onLeaveBack: () => {
      const state = Flip.getState([bar, input], { props: 'opacity' });
      gsap.set(text, {
        position: 'relative',
        clearProps: 'transform,opacity,visibility,width,height',
        overwrite: true,
      });
      gsap.from(text, { y: -60, autoAlpha: 0 });
      Flip.from(state);
    },
  });
}
