type StylishSearchBoxProps = {
  callback: React.ChangeEventHandler<HTMLTextAreaElement>
}

export const StylishSearchBox = (props: StylishSearchBoxProps) => {
  return (
    <div className="my-12 flex items-center justify-center">
      <div className="absolute flex w-full justify-center px-6">
        <div className="min-h-12 relative z-10 flex w-full max-w-lg items-center justify-center gap-2 rounded-full bg-zinc-900 px-2 py-[2px] shadow-lg shadow-black/40 dark:bg-zinc-200 dark:shadow-white/40">
          <div className="flex min-w-0 flex-1 items-center self-end">
            <form className="h-full w-full [&_textarea]:pr-11">
              <div className="relative flex h-fit min-h-full w-full items-center transition-all duration-300">
                <label htmlFor="textarea-input" className="sr-only">
                  Prompt
                </label>
                <div className="relative flex min-w-0 flex-1 self-start">
                  <textarea
                    id="home-prompt"
                    maxLength={1000}
                    className="min-w-[50%] flex-[1_0_50%] resize-none border-0 bg-transparent py-3 pl-3 text-base text-white shadow-none outline-none ring-0 [scroll-padding-block:0.75rem] selection:bg-teal-300 selection:text-black placeholder:text-zinc-300 disabled:bg-transparent disabled:opacity-80 dark:text-black dark:placeholder:text-zinc-700 sm:min-h-[15px] sm:leading-6 md:text-lg"
                    spellCheck="false"
                    rows={1}
                    placeholder="Search..."
                    autoFocus
                    onChange={props.callback}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={false}
                  id="send-button"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-400 outline-none hover:bg-gray-600 focus-visible:ring-1 focus-visible:ring-gray-400 disabled:opacity-50 disabled:hover:bg-gray-700 dark:bg-zinc-600 dark:text-zinc-200"
                >
                  <span className="sr-only">Send</span>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.5 3V2.25H15V3V10C15 10.5523 14.5522 11 14 11H3.56062L5.53029 12.9697L6.06062 13.5L4.99996 14.5607L4.46963 14.0303L1.39641 10.9571C1.00588 10.5666 1.00588 9.93342 1.39641 9.54289L4.46963 6.46967L4.99996 5.93934L6.06062 7L5.53029 7.53033L3.56062 9.5H13.5V3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
