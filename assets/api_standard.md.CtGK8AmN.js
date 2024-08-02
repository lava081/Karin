import{_ as a,c as s,I as t,j as e,a as i,ay as r,o as c,E as l}from"./chunks/framework.DZK845Al.js";const E=JSON.parse('{"title":"标准API","description":"","frontmatter":{},"headers":[],"relativePath":"api/standard.md","filePath":"api/standard.md","lastUpdated":1722641713000}'),g={name:"api/standard.md"},y=e("h1",{id:"标准api",tabindex:"-1"},[i("标准API "),e("a",{class:"header-anchor",href:"#标准api","aria-label":'Permalink to "标准API"'},"​")],-1),x=r(`<blockquote><p>正在编写中，咕咕咕~</p></blockquote><h2 id="交互方式" tabindex="-1">交互方式 <a class="header-anchor" href="#交互方式" aria-label="Permalink to &quot;交互方式&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">交互方式</th><th style="text-align:center;">kritor</th><th style="text-align:center;">onebot11</th><th style="text-align:center;">onebot12</th></tr></thead><tbody><tr><td style="text-align:left;">反向 <code>WebSocket</code></td><td style="text-align:center;">➖</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:left;">正向 <code>WebSocket</code></td><td style="text-align:center;">➖</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:left;"><code>HTTP</code></td><td style="text-align:center;">➖</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:left;">反向 <code>gRPC</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">➖</td><td style="text-align:center;">➖</td></tr><tr><td style="text-align:left;">正向 <code>gRPC</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">➖</td><td style="text-align:center;">➖</td></tr></tbody></table><h2 id="调用方法" tabindex="-1">调用方法 <a class="header-anchor" href="#调用方法" aria-label="Permalink to &quot;调用方法&quot;">​</a></h2><ul><li>在插件内部调用</li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-7j36H" id="tab-2sxz6Ob" checked><label for="tab-2sxz6Ob">被动消息</label><input type="radio" name="group-7j36H" id="tab-c3P7FVK"><label for="tab-c3P7FVK">主动调用</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.e.bot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Bot } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;node-karin&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 123456789</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取机器人实例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> bot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Bot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self_id)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 需要注意 如果ID对应的机器人实例不存在会返回undefined</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></div></div><h2 id="适配进度" tabindex="-1">适配进度 <a class="header-anchor" href="#适配进度" aria-label="Permalink to &quot;适配进度&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">温馨提示</p><p>频道相关的暂无打算支持<br> 需注意，如果在调用 API 时请求失败或超时，<code>karin</code> 会直接抛出一个错误</p></div><h3 id="核心api" tabindex="-1">核心API <a class="header-anchor" href="#核心api" aria-label="Permalink to &quot;核心API&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">核心API</th><th style="text-align:center;">kritor</th><th style="text-align:center;">onebot11</th><th style="text-align:center;">icqq</th><th style="text-align:center;">onebot12</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>GetVersion</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取Kritor版本</td></tr><tr><td style="text-align:center;"><code>GetCurrentAccount</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取当前账号信息</td></tr><tr><td style="text-align:center;"><code>DownloadFile</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">下载文件到Kritor</td></tr><tr><td style="text-align:center;"><code>SwitchAccount</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">切换账号<code>(不支持)</code></td></tr><tr><td style="text-align:center;"><code>SendMessageByResId</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">通过资源ID发送消息</td></tr><tr><td style="text-align:center;"><code>SetMessageReaded</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">清空本地聊天记录</td></tr></tbody></table><h3 id="消息相关api" tabindex="-1">消息相关API <a class="header-anchor" href="#消息相关api" aria-label="Permalink to &quot;消息相关API&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">消息相关API</th><th style="text-align:center;">kritor</th><th style="text-align:center;">onebot11</th><th style="text-align:center;">icqq</th><th style="text-align:center;">onebot12</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>SendMessage</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">发送消息</td></tr><tr><td style="text-align:center;"><code>RecallMessage</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">撤回消息</td></tr><tr><td style="text-align:center;"><code>GetMessage</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取消息</td></tr><tr><td style="text-align:center;"><code>GetMessageBySeq</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取消息<code>(通过seq)</code></td></tr><tr><td style="text-align:center;"><code>GetHistoryMessage</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取历史消息</td></tr><tr><td style="text-align:center;"><code>GetHistoryMessageBySeq</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取历史消息</td></tr><tr><td style="text-align:center;"><code>UploadForwardMessage</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">上传合并转发消息</td></tr><tr><td style="text-align:center;"><code>DownloadForwardMessage</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">下载合并转发消息</td></tr><tr><td style="text-align:center;"><code>GetEssenceMessageList</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取精华消息</td></tr><tr><td style="text-align:center;"><code>SetEssenceMessage</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">设置精华消息</td></tr><tr><td style="text-align:center;"><code>DeleteEssenceMessage</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">删除精华消息</td></tr><tr><td style="text-align:center;"><code>ReactMessageWithEmoji</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">设置消息评论表情</td></tr></tbody></table><h3 id="好友相关api" tabindex="-1">好友相关API <a class="header-anchor" href="#好友相关api" aria-label="Permalink to &quot;好友相关API&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">好友相关API</th><th style="text-align:center;">kritor</th><th style="text-align:center;">onebot11</th><th style="text-align:center;">icqq</th><th style="text-align:center;">onebot12</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>GetFriendList</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取好友列表</td></tr><tr><td style="text-align:center;"><code>GetFriendProfileCard</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取名片<code>(限好友)</code></td></tr><tr><td style="text-align:center;"><code>GetStrangerProfileCard</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取陌生人信息</td></tr><tr><td style="text-align:center;"><code>SetProfileCard</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">设置自己的名片</td></tr><tr><td style="text-align:center;"><code>IsBlackListUser</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">是否是黑名单用户</td></tr><tr><td style="text-align:center;"><code>VoteUser</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">点赞好友</td></tr><tr><td style="text-align:center;"><code>GetUidByUin</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取uid</td></tr><tr><td style="text-align:center;"><code>GetUinByUid</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取uin</td></tr></tbody></table><h3 id="群聊相关api" tabindex="-1">群聊相关API <a class="header-anchor" href="#群聊相关api" aria-label="Permalink to &quot;群聊相关API&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">群聊相关API</th><th style="text-align:center;">kritor</th><th style="text-align:center;">onebot11</th><th style="text-align:center;">icqq</th><th style="text-align:center;">onebot12</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>BanMember</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">禁言用户</td></tr><tr><td style="text-align:center;"><code>PokeMember</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">戳一戳用户</td></tr><tr><td style="text-align:center;"><code>KickMember</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">踢出用户</td></tr><tr><td style="text-align:center;"><code>LeaveGroup</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">退出群组</td></tr><tr><td style="text-align:center;"><code>ModifyMemberCard</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">修改群名片</td></tr><tr><td style="text-align:center;"><code>ModifyGroupName</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">修改群名称</td></tr><tr><td style="text-align:center;"><code>ModifyGroupRemark</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">修改群备注</td></tr><tr><td style="text-align:center;"><code>SetGroupAdmin</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">设置群管理员</td></tr><tr><td style="text-align:center;"><code>SetGroupUniqueTitle</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">设置群头衔</td></tr><tr><td style="text-align:center;"><code>SetGroupWholeBan</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">设置全员禁言</td></tr><tr><td style="text-align:center;"><code>GetGroupInfo</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取群信息</td></tr><tr><td style="text-align:center;"><code>GetGroupList</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取群列表</td></tr><tr><td style="text-align:center;"><code>GetGroupMemberInfo</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取群成员信息</td></tr><tr><td style="text-align:center;"><code>GetGroupMemberList</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取群成员列表</td></tr><tr><td style="text-align:center;"><code>GetProhibitedUserList</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取禁言用户列表</td></tr><tr><td style="text-align:center;"><code>GetRemainCountAtAll</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取艾特全体成员剩余次数</td></tr><tr><td style="text-align:center;"><code>GetNotJoinedGroupInfo</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取未加入群组信息</td></tr><tr><td style="text-align:center;"><code>GetGroupHonor</code></td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取群荣誉信息</td></tr></tbody></table><h3 id="web服务相关api" tabindex="-1">Web服务相关API <a class="header-anchor" href="#web服务相关api" aria-label="Permalink to &quot;Web服务相关API&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">Web服务相关API</th><th style="text-align:center;">kritor</th><th style="text-align:center;">onebot11</th><th style="text-align:center;">icqq</th><th style="text-align:center;">onebot12</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>GetCookies</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取通用cookie</td></tr><tr><td style="text-align:center;"><code>GetCredentials</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取bkn参数与cookie</td></tr><tr><td style="text-align:center;"><code>GetCSRFToken</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取bkn</td></tr><tr><td style="text-align:center;"><code>GetHttpCookies</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">获取http请求的cookie</td></tr></tbody></table><h3 id="请求事件相关api" tabindex="-1">请求事件相关API <a class="header-anchor" href="#请求事件相关api" aria-label="Permalink to &quot;请求事件相关API&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">请求事件相关API</th><th style="text-align:center;">kritor</th><th style="text-align:center;">onebot11</th><th style="text-align:center;">icqq</th><th style="text-align:center;">onebot12</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>SetFriendApplyResult</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">设置好友申请结果</td></tr><tr><td style="text-align:center;"><code>SetGroupApplyResult</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">设置群组申请结果</td></tr><tr><td style="text-align:center;"><code>SetInvitedJoinGroupResult</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:left;">设置邀请入群结果</td></tr></tbody></table>`,20);function o(h,p,k,b,f,u){const n=l("NolebasePageProperties"),d=l("NolebaseGitChangelog");return c(),s("div",null,[y,t(n),x,t(d)])}const P=a(g,[["render",o]]);export{E as __pageData,P as default};
