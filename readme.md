## 个人博客


> 打包发布命令

```
    # macos

    npm run docs:build && scp -r ./docs/.vitepress/dist/ root@162.14.113.88:/home/jie/nginx/resource/project/blog/

    # win

    npm run docs:build ; scp -r ./docs/.vitepress/dist/ root@162.14.113.88:/home/jie/nginx/resource/project/blog/

    # macos 和 win 不同的地方在于  && 和 ;