====================
webpack
====================

认识webpack
====================

-----------------------
什么是webpack 
-----------------------
webpack是一个现代的JavaScript应用的静态模块打包工具。

-----------------------
功能
-----------------------

- 将webpack中的各种资源模块进行打包合并成一个或多个包(Bundle)。
- 对资源进行处理，比如压缩图片，将scss转成css，将ES6语法转成ES5语法，将TypeScript转成JavaScript等等操作。

----------------------------------------------
webpack和grunt/gulp的对比
----------------------------------------------

- grunt/gulp更加强调的是前端流程的自动化，模块化不是它的核心。
- webpack更加强调模块化开发管理，而文件压缩合并、预处理等功能，是他附带的功能。


.. image:: ../images/打包.png

webpack的安装
====================

前提环境是需要node的，然后需要有npm的， 最后通过npm安装webpack 

.. code-block:: bash 

    npm install webpack --save-dev

其中 --save-dev 是表示开发时依赖的。


webpack的起步
====================

目录说明

dist
    用于存放打包后的文件，也就是后续我们生产环境需要的文件夹，其他的生产环境不需要。
src
    源码文件夹，用于存放我们的开发文件。
index.html
    首页文件
package.json 
    通过npm init生成的文件，

.. image:: ../images/webpack起步.png


通过如下命令可以完成打包

.. code-block:: bash

    # npm初始化
    npm init
    # 安装webpack
    npm install webpack --save-dev
    # 进行打包操作
    webpack bundle  --entry  ./src/main.js -o ./dist/bundle.js 

.. tip:: 详细的具体代码点击右上角的github进入这个仓库找到工程进行测试。


webpack的配置
====================

上面就是手工打包的一种方式了， 但是每次都要敲个命令去执行显然不是很方便的， 需要写成脚本方式的，然后执行才是正确做法。

webpack提供一个机制，可以配置一个文件，然后直接执行webpack 即可完成构建。

----------------------------
webpack.config.js样例
----------------------------

.. literalinclude:: ../../中级学习/03-webpack/02-webpack配置/webpack.config.js
   :encoding: utf-8
   :language: javascript
   :emphasize-lines: 1
   :linenos: 

----------------------------
package.json 样例
----------------------------
这个文件可以先通过npm init进行初始化，然后修改为如下。

.. literalinclude:: ../../中级学习/03-webpack/02-webpack配置/package.json
   :encoding: utf-8
   :language: json
   :emphasize-lines: 1
   :linenos: 

----------------------------
构建
----------------------------
上面的2个文件都创建和修改完毕后， 我们执行`npm run build` 就会从package.json文件找到`build`对应的脚本`webpack`进行执行，webpack在执行的时候会读取`webpack.config.js`作为配置文件
进行构建。这样就构建起来非常方便了。 


loader的使用
====================
上面的构建我们webpack完成了js的文件构建打包，但是文件还有其他的css,html等，这些文件webpack本身是无法进行处理的，需要借助loader完成处理。 

loader使用过程需要2个步骤。

#. 通过npm安装需要使用的loader
#. 在webpack.config.js中的modules关键字下进行配置

----------------------------
css文件处理
----------------------------

css的处理需要相关的css load 支持需要先安装对应的loader, 然后进行配置。

安装loader 

.. code-block:: bash 
    npm install --save-dev css-loader 

进行配置

.. literalinclude:: ../../中级学习/03-webpack/03-webpack-loader-css/webpack.config.js
   :encoding: utf-8
   :language: javascript
   :emphasize-lines: 1
   :linenos: 

----------------------------
less文件处理
----------------------------

还是按照软件和对应的配置

.. code-block:: bash 

    npm install --save-dev less-loader less 

.. literalinclude:: ../../中级学习/03-webpack/04-webpack-loader-less/webpack.config.js
   :encoding: utf-8
   :language: javascript
   :emphasize-lines: 1
   :linenos: 

webpack中配置Vue
====================

安装loader

.. code-block:: bash 

    npm install --save-dev vue-loader vue-template-compiler  

进行配置

.. literalinclude:: ../../中级学习/03-webpack/07-webpack-引入vue/webpack.config.js
   :encoding: utf-8
   :language: javascript
   :emphasize-lines: 1
   :linenos: 


plugin的使用
====================

插件是完成额外的附属的一些功能，比如添加版权信息。

.. literalinclude:: ../../中级学习/03-webpack/08-webpack-plugin/webpack.config.js
   :encoding: utf-8
   :language: javascript
   :emphasize-lines: 1
   :linenos: 


搭建本地服务器
====================


webpack提供了一个可选的本地开发服务器，这个本地服务器基于node.js搭建，内部使用express框架，可以实现我们想要的让浏览器自动刷新显示我们修改后的结果。

安装包

.. code-block:: bash 

    npm install --save-dev webpack-dev-server 


配置

.. literalinclude:: ../../中级学习/03-webpack/09-webpack-dev-server/webpack.config.js
   :encoding: utf-8
   :language: javascript
   :emphasize-lines: 1
   :linenos: 