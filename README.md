# html,css,jsp를 이용한 webpage 만들기(로그인,회원가입)
[움직이는 대한민국 문화 꾸미기]
![image](https://github.com/seokhyun06/WebPage/assets/122009563/a588dfb7-b56a-4fe9-90c6-5dc8ba112837)

[로그인 화면]
![image](https://github.com/seokhyun06/WebPage/assets/122009563/53bae2b3-88e2-47a3-a491-59dea031361e)

[회원가입 화면]
![image](https://github.com/seokhyun06/WebPage/assets/122009563/25551940-46d2-4173-b550-5728738ef982)

[index.html 코드]
 <!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<link rel="stylesheet" href="css/style.css" type="text/css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" defer="defer"></script>
<script src="js/script.js" defer="defer" ></script>
</head>


<body>

<div id='page'>
	<header>
		<div id='logo'>
			<img src='imgs/Korean Flag.jfif' alt="style size" style="width:150px; height:100px">
		</div>
		<div id='top'>
			  <ul class="main-menu">
                <li>
                    <a href="#" >건축물</a>
                    <ul class="sub"> 
                        <li><a href="#">경복궁</a></li>
                        <li><a href="#">광화문</a></li>
                        <li><a href="#">수원화성</a></li>
                        <li><a href="#">한옥</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" >식문화</a>
                    <ul class="sub">
                        <li><a href="#">김치</a></li>
                        <li><a href="#">비빔밥</a></li>
                        <li><a href="#">불고기</a></li>
                        <li><a href="#">갈비찜</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" >K</a>
                    <ul class="sub">
                        <li><a href="#">POP</a></li>
                        <li><a href="#">드라마</a></li>
                        <li><a href="#">예능</a></li>
                        <li><a href="#">영화</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" >의문화</a>
                    <ul class="sub">
                        <li><a href="#">한복</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" >Members</a>
                    <ul class="sub">
                        <li onclick="winOpen1()"><a href="#">로그인</a></li>
                        <li onclick="winOpen2()"><a href="#">회원가입 클릭</a></li>
                    </ul>
                </li>
             </ul>
		</div>
	</header>
	<div class='clear'></div>  <!--	float 속성 해제 -->	
	
	<section>
		<div class="imgs" >
			<img src='https://cdn.discordapp.com/attachments/1116628384177475644/1117421652863623178/palace.png' alt="style size">
			<img src='https://cdn.discordapp.com/attachments/1116628384177475644/1117421614166986772/image.png' alt="style size">
			<img src='imgs/kpop.png' alt="style size">
			<img src='imgs/hanbok.png' alt="style size">
		</div> 
	</section>
	
	<div class='clear'></div>  <!--	float 속성 해제 -->
	
		    <div class="notice">
	        <h2>대한민국 정보</h2>	        
	        <table class="table">
	            <tr>
	                <th>국가명</th>
	                <td>대한민국</td>
	            </tr>
	            <tr>
	                <th>언어</th>
	                <td>한국어</td>
	            </tr>
	            <tr>
	            	<th>면적 </th>
	                <td>100,339.4㎢ (세계 107위)</td>
	            </tr>
	            <tr>
					<th>수도</th>
	                 <td>서울</td>
	            </tr>
	            <tr>
	                <th>인구</th>
	                <td>5,155만 8,034명 (통계청'23년)</td>
	            </tr>
	            <tr>
	                <th>통화</th>
	                <td>원(KRW)</td>
	            </tr>
	            <tr>
	                <th>시차</th>
	                <td>GMT+9시간*</td>
	            </tr>
	            <tr>
	                <th>종교</th>
	                <td>개신교, 불교, 천주교</td>
	            </tr>
	        </table>
	    </div>
   
	<div class='clear'></div>  <!--	float 속성 해제 -->	
	
		<footer>
		<div id='address' align="center">
			<img src='imgs/address.png'>
		</div>
		
	</footer>
</div> <!-- 아이디 page의 끝 -->
</body>
</html>
[로그인 화면 html 코드]

[회원가입 화면 html 코드]

[css code]

[js code]



