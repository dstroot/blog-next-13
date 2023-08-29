import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Container } from '@/components/Container'
import { ThemeToggle } from '@/components/ThemeToggle'

// import { Combobox } from '@/components/combobox'
// import { MainNav } from '@/components/layouts/main-nav'
// import { MobileNav } from '@/components/layouts/mobile-nav'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur">
      <Container variant="default">
        <div className="flex h-12 items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link
              className="flex h-6 items-center space-x-2 rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              href="/"
              aria-label="Link to home page"
            >
              <Avatar>
                <AvatarImage
                  src="https://danstroot.imgix.net/assets/blog/authors/dan.jpeg?auto=format&fit=max&w=80"
                  alt="Dan Stroot"
                />
                <AvatarFallback />
              </Avatar>
              {/* <span className="text-2xl font-medium leading-none">
              Dan Stroot
            </span> */}
            </Link>
            <nav className="hidden md:flex md:items-center md:space-x-6">
              {siteConfig.mainNav.map((item) => (
                <Link
                  key={item.name}
                  className="mt-1 space-y-3 rounded-md text-sm font-medium text-foreground ring-offset-background transition-colors hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* <Combobox /> */}

            <Link
              href="/search"
              className="relative inline-flex h-8 w-8 items-center justify-center rounded-md  bg-transparent p-0 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-1 focus-visible:ring-ring"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <span className="sr-only">Search</span>
            </Link>

            <ThemeToggle />

            <button
              className="hamburger inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 md:hidden"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:R3ipja:"
              data-state="closed"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <g>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16"
                  />
                </g>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 12h16"
                />
                <g>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 18h16"
                  />
                </g>
              </svg>
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}



// <header className="header_header__zJOD0 header_sticky__2ak2z">
//   <a className="skip-nav-link_skipLink__M2lut" href="#geist-skip-nav" tabIndex="0">
//     Skip to content
//   </a>
//   <nav className="navbar_nav__dCdXi">
//     <div className="navbar_mobileTop__yLNXQ">
//       <div
//         className="stack_stack__iZkUS stack"
//         data-version="v1"
//         style="--stack-flex:initial;--stack-direction:row;--stack-align:center;--stack-justify:flex-start;--stack-padding:0px;--stack-gap:4px"
//       >
//         <a
//           rel="noopener noreferrer"
//           target="_blank"
//           data-testid="navbar/vercel-logo"
//           href="https://vercel.com/home?utm_source=next-site&amp;utm_medium=banner&amp;utm_campaign=home"
//           aria-label="Go to Vercel homepage"
//           title="Go to Vercel homepage"
//         >
//           <svg
//             aria-label="Vercel logomark"
//             height="22"
//             role="img"
//             style="width:auto;overflow:visible"
//             viewBox="0 0 74 64"
//           >
//             <path
//               d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
//               fill="var(--geist-foreground)"
//             ></path>
//           </svg>
//         </a>
//         <svg height="32" role="separator" viewBox="0 0 32 32" width="32">
//           <path
//             d="M22 5L9 28"
//             stroke="var(--accents-2)"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           ></path>
//         </svg>
//         <a className="navbar_mobileLogo__Q5KxZ" title="Go to the homepage" href="/">
//           <svg
//             aria-label="Next.js logotype"
//             height="18"
//             role="img"
//             viewBox="0 0 394 79"
//           >
//             <path
//               d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"
//               fill="var(--geist-foreground)"
//             ></path>
//             <path
//               d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"
//               fill="var(--geist-foreground)"
//             ></path>
//             <path
//               d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"
//               fill="var(--geist-foreground)"
//             ></path>
//             <path
//               d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"
//               fill="var(--geist-foreground)"
//             ></path>
//             <path
//               clip-rule="evenodd"
//               d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
//               fill="var(--geist-foreground)"
//               fill-rule="evenodd"
//             ></path>
//             <path
//               d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"
//               fill="var(--geist-foreground)"
//             ></path>
//             <path
//               d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"
//               fill="var(--geist-foreground)"
//             ></path>
//             <path
//               d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"
//               fill="var(--geist-foreground)"
//             ></path>
//           </svg>
//         </a>
//       </div>
//       <div className="navbar_mobileTopRight__p4VGF">
//         <button className="navbar_search__dZT2b" data-variant="large" type="button">
//           Search documentation...<kbd className="navbar_kbd__5R6Wu">⌘K</kbd>
//         </button>
//         <button
//           className="navbar_search__dZT2b"
//           data-variant="medium"
//           type="button"
//         >
//           Search...<kbd>⌘K</kbd>
//         </button>
//         <button className="navbar_search__dZT2b" data-variant="small" type="button">
//           <svg
//             className="with-icon_icon__MHUeb"
//             data-testid="geist-icon"
//             fill="none"
//             height="24"
//             shape-rendering="geometricPrecision"
//             stroke="currentColor"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-width="1.5"
//             viewBox="0 0 24 24"
//             width="24"
//             style="color:currentColor"
//           >
//             <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
//             <path d="M16 16l4.5 4.5"></path>
//           </svg>
//         </button>
//         <button
//           aria-label="open menu"
//           className="navbar_menuButton__BJwt4"
//           type="button"
//         >
//           <div className="menu-toggle_wrap__qevaX "></div>
//         </button>
//       </div>
//     </div>
//     <div className="navbar_links__jysVN">
//       <div
//         className="stack_stack__iZkUS stack"
//         data-version="v1"
//         style="--stack-flex:initial;--stack-direction:row;--stack-align:center;--stack-justify:flex-start;--stack-padding:0px;--stack-gap:4px"
//       >
//         <a
//           rel="noopener noreferrer"
//           target="_blank"
//           data-testid="navbar/vercel-logo"
//           href="https://vercel.com/home?utm_source=next-site&amp;utm_medium=banner&amp;utm_campaign=home"
//           aria-label="Go to Vercel homepage"
//           title="Go to Vercel homepage"
//         >
//           <svg
//             aria-label="Vercel logomark"
//             height="22"
//             role="img"
//             style="width:auto;overflow:visible"
//             viewBox="0 0 74 64"
//           >
//             <path
//               d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
//               fill="var(--geist-foreground)"
//             ></path>
//           </svg>
//         </a>
//         <svg height="32" role="separator" viewBox="0 0 32 32" width="32">
//           <path
//             d="M22 5L9 28"
//             stroke="var(--accents-2)"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           ></path>
//         </svg>
//         <a
//           aria-label="Go to the homepage"
//           className="navbar_logo__wXwXy"
//           title="Go to the homepage"
//           data-state="closed"
//           style="-webkit-touch-callout:none"
//           href="/"
//         >
//           <svg
//             aria-label="Next.js logotype"
//             height="18"
//             role="img"
//             viewBox="0 0 394 79"
//           >
//             <path
//               d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"
//               fill="var(--geist-foreground)"
//             ></path>
//             <path
//               d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"
//               fill="var(--geist-foreground)"
//             ></path>
//             <path
//               d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"
//               fill="var(--geist-foreground)"
//             ></path>
//             <path
//               d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"
//               fill="var(--geist-foreground)"
//             ></path>
//             <path
//               clip-rule="evenodd"
//               d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
//               fill="var(--geist-foreground)"
//               fill-rule="evenodd"
//             ></path>
//             <path
//               d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"
//               fill="var(--geist-foreground)"
//             ></path>
//             <path
//               d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"
//               fill="var(--geist-foreground)"
//             ></path>
//             <path
//               d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"
//               fill="var(--geist-foreground)"
//             ></path>
//           </svg>
//         </a>
//       </div>
//       <a className="" href="/showcase">
//         Showcase
//       </a>
//       <a className="" title="Documentation" href="/docs">
//         Docs
//       </a>
//       <a className="" href="/blog">
//         Blog
//       </a>
//       <a
//         rel="canonical noreferrer"
//         target="_blank"
//         href="https://vercel.com/analytics?utm_source=next-site&amp;utm_medium=navbar&amp;utm_campaign=home"
//       >
//         Analytics
//         <svg
//           aria-hidden="true"
//           className="navbar_externalArrow___VWBd"
//           height="7"
//           viewBox="0 0 6 6"
//           width="7"
//         >
//           <path
//             d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
//             fill="var(--accents-3)"
//           ></path>
//         </svg>
//       </a>
//       <a
//         rel="noopener noreferrer"
//         target="_blank"
//         href="https://vercel.com/templates/next.js?utm_source=next-site&amp;utm_medium=navbar&amp;utm_campaign=home"
//       >
//         Templates
//         <svg
//           aria-hidden="true"
//           className="navbar_externalArrow___VWBd"
//           height="7"
//           viewBox="0 0 6 6"
//           width="7"
//         >
//           <path
//             d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
//             fill="var(--accents-3)"
//           ></path>
//         </svg>
//       </a>
//       <a
//         rel="noopener noreferrer"
//         target="_blank"
//         href="https://vercel.com/enterprise?utm_source=next-site&amp;utm_medium=navbar&amp;utm_campaign=cta-url-enterprise"
//       >
//         Enterprise
//         <svg
//           aria-hidden="true"
//           className="navbar_externalArrow___VWBd"
//           height="7"
//           viewBox="0 0 6 6"
//           width="7"
//         >
//           <path
//             d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
//             fill="var(--accents-3)"
//           ></path>
//         </svg>
//       </a>
//     </div>
//     <div className="navbar_headerButtons__m6ZFa">
//       <button className="navbar_search__dZT2b" data-variant="large" type="button">
//         Search documentation...<kbd className="navbar_kbd__5R6Wu">⌘K</kbd>
//       </button>
//       <button className="navbar_search__dZT2b" data-variant="medium" type="button">
//         Search...<kbd>⌘K</kbd>
//       </button>
//       <button className="navbar_search__dZT2b" data-variant="small" type="button">
//         <svg
//           className="with-icon_icon__MHUeb"
//           data-testid="geist-icon"
//           fill="none"
//           height="24"
//           shape-rendering="geometricPrecision"
//           stroke="currentColor"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="1.5"
//           viewBox="0 0 24 24"
//           width="24"
//           style="color:currentColor"
//         >
//           <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
//           <path d="M16 16l4.5 4.5"></path>
//         </svg>
//       </button>
//       <a
//         role="link"
//         tabindex="0"
//         href="https://vercel.com/solutions/nextjs?utm_source=next-site&amp;utm_medium=banner&amp;utm_campaign=home"
//         type="submit"
//         className="button_base__BjwbK reset_reset__KRyvc button_button__81573 reset_reset__KRyvc navbar_deploy__IKZN3 button_secondary__kMMNc button_small__iQMBm button_invert__YNhnn"
//         data-geist-button=""
//         data-version="v1"
//         style="--geist-icon-size:16px"
//       >
//         <span className="button_prefix__2XlwH">
//           <svg
//             aria-label="Vercel logomark"
//             height="13"
//             role="img"
//             style="width:auto;overflow:visible"
//             viewBox="0 0 74 64"
//           >
//             <path
//               d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
//               fill="var(--geist-foreground)"
//             ></path>
//           </svg>
//         </span>
//         <span className="button_content__1aE1_">Deploy</span>
//       </a>
//       <a
//         role="link"
//         tabindex="0"
//         href="/learn/foundations/about-nextjs?utm_source=next-site&amp;utm_medium=navbar"
//         type="submit"
//         className="button_base__BjwbK reset_reset__KRyvc button_button__81573 reset_reset__KRyvc geist-new-themed geist-new-default geist-new-default-fill button_small__iQMBm button_invert__YNhnn"
//         data-geist-button=""
//         data-version="v1"
//         style="--geist-icon-size:16px"
//       >
//         <span className="button_content__1aE1_">Learn</span>
//       </a>
//     </div>
//   </nav>
// </header>
