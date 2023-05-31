class KaktusKardesler extends HTMLElement {
  constructor() {
    super();
  }
  
  kardesler = [
    {
      classNames: ['container', 'left'],
      imgUri: 'https://images.unsplash.com/photo-1551893665-f843f600794e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ5Nzg5NjV8&ixlib=rb-4.0.3&q=80&w=400',
      imgAlt: 'seyyahi solist',
      linkIG: 'https://www.instagram.com/seyyahikaktus',
      titleIG: 'seyyahi',
      desc: 'kaktüs kardeş seyyahi IG'
    },
    {
      classNames: ['container', 'right'],
      imgUri: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ5ODE1NDd8&ixlib=rb-4.0.3&q=80&w=400',
      imgAlt: 'melodi SS',
      linkIG: 'https://www.instagram.com/melodikaktus',
      titleIG: 'melodi',
      desc: 'kaktüs kardeş melodi IG'
    }
  ]
  
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open'});
    
    const styles = document.createElement('style');
    styles.textContent = `
      :host {
        display: block;
        box-sizing: border-box;
        background-color: #474e5d;
      }
      
      .image {
        display: block;
        max-width: 100%;
      }
      
      .link {
        display: block;
        color: #000;
        text-align: center;
        text-decoration: none;
      	font-size: 20px;
      	font-weight: 600;
      }
      
      /* The actual timeline (the vertical ruler) */
      .timeline {
        position: relative;
        max-width: 70%;
        margin: auto;
      }
      
      /* The actual timeline (the vertical ruler) */
      .timeline::after {
        content: "";
        position: absolute;
        width: 6px;
        background-color: #eee;
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -3px;
      }
      
      /* Container around content */
      .container {
        padding: 10px 40px;
        position: relative;
        background-color: inherit;
        max-width: 40%;
      }
      
      /* Place the container to the left */
      .left {
        left: 0;
      }
      
      /* Place the container to the right */
      .right {
        left: 53%;
      }
      
      /* Add arrows to the left container (pointing right) */
      .left::before, .right::before{
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        border: medium solid white;
      }
      
      .left::before {
        right: 30px;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent white;
      }
      
      /* Add arrows to the right container (pointing left) */
      .right::before {
        left: 30px;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
      }
		 
		 /* The actual content */
		 .content {
		   padding: 20px 30px;
		   background-color: #eee;
		   position: relative;
		   border-radius: 6px;
     }
     
     /* Media queries - Responsive timeline on screens less than 600px wide */
     @media screen and (max-width: 600px) {
       /* Place the timelime to the left */
       .timeline::after {
         left: 31px;
       }
       
       /* Full-width containers */
       .container {
         width: 100%;
         padding-left: 70px;
         padding-right: 25px;
       }
       
       /* Make sure that all arrows are pointing leftwards */
       .container::before {
         left: 60px;
         border: medium solid white;
         border-width: 10px 10px 10px 0;
         border-color: transparent white transparent transparent;
       }
       
       /* Make sure all circles are at the same spot */
       .left::after, .right::after {
         left: 15px;
       }
       
       /* Make all right containers behave like the left ones */
       .right {
         left: 0%;
       }
     }
    `
    
    // timeline element
    const timeline = document.createElement('main');
    timeline.classList.add('timeline')
    
    this.kardesler.forEach(kardes => {
      const container = document.createElement('section')
      container.classList.add(...kardes.classNames)
      
      const content = document.createElement('div')
      content.classList.add('content')
      
      const image = document.createElement('img')
      image.classList.add('image')
      image.src = kardes.imgUri
      image.alt = kardes.imgAlt
      
      const link = document.createElement('a')
      link.classList.add('link')
      link.target = '_blank'
      link.href = kardes.linkIG
      link.title = kardes.titleIG
      link.textContent = kardes.desc
      
      content.append(image, link)
      
      container.append(content)
      
      timeline.append(container)
    })
    
    // append to shadow
    shadowRoot.append(styles, timeline)
  }
}

customElements.define('kaktus-kardesler', KaktusKardesler)
