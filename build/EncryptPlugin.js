import { Plugin, Compiler} from "webpack";

class EncryptPlugin extends Plugin{
    /** @param {Compiler} compiler */
    apply(compiler){
        compiler.hooks.entryOption.tapPromise("EncryptPlugin", function(){
            
        });
    }
}
