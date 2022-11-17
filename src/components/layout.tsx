import { ReactNode, useState } from "react";
import toast from 'react-hot-toast';

type Props = { 
  children: ReactNode,
  sendTokens: (tokens: any) => void
}

export const Layout = (props: Props) =>  {

  const [JsonTokens, setJsonTokens] = useState( '' );

  function updateTokens() {
    try {  
      props.sendTokens(JsonTokens);
      document.getElementById('modal-tokens')?.click();
      toast.success('Tokens updated');
    } catch (error) {
      toast.error('Error updating tokens');
    }
  }

  return <>
  <article className="mx-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <header className="sticky z-[2] rounded-b-md top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 mx-auto flex items-center justify-between space-x-4 2xl:container">
              <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">Figma tokens to CSS</h5>
              <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
              </button>
              <div className="flex space-x-4">
                <label htmlFor="modal-tokens" className="cursor-pointer relative px-4 py-2 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                  <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                  <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
                </svg>
                <span className="-mr-1 font-medium">update tokens.json</span>
              </label>
              </div>
          </div>
      </header>
      <div className="px-6 pt-6 2xl:container">
        {props.children}
        <input type="checkbox" id="modal-tokens" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Tokens</h3>
            <textarea 
              className="textarea textarea-bordered min-h-[60vh] w-full" placeholder="JSON tokens"
              onChange={e => setJsonTokens(e.target.value)}
            ></textarea>
            <div className="modal-action items-center">
              <label htmlFor="modal-tokens" id="cancel-modal"  className="btn  btn-ghost btn-sm">cancelar</label>
              <button className="btn" onClick={ () => updateTokens() }>Salvar</button>
            </div>
          </div>
        </div>
      </div>
  </article>
  </>
}