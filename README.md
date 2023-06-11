# html,css,jsp를 이용한 webpage 만들기(로그인,회원가입)
# [움직이는 대한민국 문화 꾸미기]

![image](https://github.com/seokhyun06/WebPage/assets/122009563/a588dfb7-b56a-4fe9-90c6-5dc8ba112837)

[로그인 화면]

![image](https://github.com/seokhyun06/WebPage/assets/122009563/53bae2b3-88e2-47a3-a491-59dea031361e)

[회원가입 화면]
![image](https://github.com/seokhyun06/WebPage/assets/122009563/25551940-46d2-4173-b550-5728738ef982)

# [index.html 코드]

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
# [로그인 화면 html 코드]
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
 <title>로그인페이지</title>
</head>
<body>
    <form> 
        <p>ID : <input type = "text" size="20"> </p>
        <p> Password : <input type = "password" size="30"></p>
        <p> <input type="submit" value="확인"> <input type="reset" value="취소"></p>
    </form>
    
</body>
</html>
# [회원가입 화면 html 코드]
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>


        body {
            font-size: 14px;
            font-family: 돋움;
        }


        table {
            width: 800px;
            margin: 0 auto;
        }


        table, tr, th, td {
            border: 1px solid #333;
            border-spacing: 0;
        }


        strong { color: red; }


        caption {
            text-align: right;
        }


        th, td {
            padding: 10px 15px;
        }


        span { color: red;}


        th {text-align: right;}


        #btn {float:right;}


    </style>
</head>


<body>
    <form action="join.jsp" method="post" name="form">
        <table>
            <caption>(*)표시는 <strong>필수입력</strong> 사항입니다.</caption>
            <tr>
                <th><span>*</span>회원유형</th>
                <td>학생</td>
            </tr>
            <tr>
                <th><span>*</span>이름(실명)</th>
                <td>홍길동</td>
            </tr>
            <tr>
                <th><span>*</span>아이디</th>
                <td><p><input type="text" size="20" maxlength="15"></p>
                    <p>6~15자의 영문소문자, 숫자만 가능합니다.</p>
                </td>
            </tr>
            <tr>
                <th><span>*</span>비밀번호</th>
                <td><p><input type="password" size="20"></p>
                    <p>비밀번호는 <strong>영대문자, 영소문자, 숫자, 특수문자의 조합</strong>으로 이루어져야합니다.<br>
                        - 조합이 2종류 이상인 경우 10자리 이상,<br>
                        - 조합이 3종류 이상인 경우 8자리 이상 가능합니다.
                    </p>
                </td>
            </tr>
            <tr>
                <th><span>*</span>비밀번호 확인</th>
                <td><p><input type="password" size="20"></p></td>
            </tr>    
            <tr>
                <td colspan="2"><p>학교 홈페이지에 가입하시겠습니까?
<span id="btn"><input type="submit" value="확인"> <input type="reset" value="취소"></span></p>
                </td>
            </tr>
        </table>
    </form>
</body>
</html>
[css code]

[js code]



