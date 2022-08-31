export default class Lightbox {
  static activate() {
    document.body.insertAdjacentHTML(
      'beforeend',
      `
        <div class="lightBox" id="lightBox" style="display: none;">
        <button type="button" class="lightBoxLeft lightBoxbtn">
            &#10094;
        </button>
        <button type="button" class="lightBoxRight lightBoxbtn">    	
            &#10095;
            </button>
            <div class="lightBoxInner">
            <button type="button" class="lightBoxClose lightBoxbtn">
                &times;
            </button>
                <div class="lightBoxContent">
                
                </div>

            </div>
        </div>
    `
    );





    const lightBox = document.querySelector('#lightBox');
    const btnOpen = document.querySelector('.lightBoxOpen');
    const btnClose = document.querySelector('.lightBoxClose');
    const btnLeft = document.querySelector('.lightBoxLeft');
    const btnRight = document.querySelector('.lightBoxRight');
    const imageDisplay = document.querySelectorAll('.imageDisplay');

    const closeLightBox = () => {
      lightBox.style.display = 'none';
    };

    lightBox.addEventListener('mousedown', (e) => {
      if (e.target.matches('#lightBox')) {
        closeLightBox();
      }
    });


    let lightBoxImageIndex = 0;
    let countUp = () => {
      if (lightBoxImageIndex < 11) {
        lightBoxImageIndex++;
      } else { lightBoxImageIndex = 0; }
      return lightBoxImageIndex;
    };
    let countDown = () => {
      if (lightBoxImageIndex < 1) {
        lightBoxImageIndex = 11;
      } else { lightBoxImageIndex--; }
      return lightBoxImageIndex;
    };
    const openLightBox = () => {
      lightBox.style.display = 'flex';
      imageDisplay[lightBoxImageIndex].style.display = 'flex';
    };
    const prevLightBox = () => {
      imageDisplay[lightBoxImageIndex].style.display = 'none';
      imageDisplay[countDown()].style.display = 'flex';
    };
    const nextLightBox = () => {
      imageDisplay[lightBoxImageIndex].style.display = 'none';
      imageDisplay[countUp()].style.display = 'flex';
    };
    btnOpen.addEventListener('click', () => {
      openLightBox();
    });
    btnClose.addEventListener('click', () => {
      closeLightBox();
    });
    btnLeft.addEventListener('click', () => {
      prevLightBox();
    });
    btnRight.addEventListener('click', () => {
      nextLightBox();
    });
  }

  static show(htmlOrElement) {
    const content = document.querySelector('#lightBox .lightBoxContent');

    document.querySelector('#lightBox').style.display = null;

    if (typeof htmlOrElement === 'string') {
      content.innerHTML = htmlOrElement;
    } else {
      content.innerHTML = '';
      content.appendChild(htmlOrElement);
    }
  }
}


