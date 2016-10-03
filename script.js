var start = new Date().getTime();
            
            function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++ ) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }

            
            function makeShapeAppear() {
                
                var top = Math.random() * 250;
                
                var left = Math.random() * 350;
                
                var width = (Math.random() * 50) + 50;
                
                if (Math.random() > 0.5) {
                    
                    document.getElementById("shape").style.borderRadius = "50%";
                } else {
                    
                    document.getElementById("shape").style.borderRadius = "0";
                }
                
                document.getElementById("shape").style.backgroundColor = getRandomColor();
                
                document.getElementById("shape").style.width = width + "px"
                
                document.getElementById("shape").style.height = width + "px"
                
                document.getElementById("shape").style.top = top + "px";
                
                document.getElementById("shape").style.left = left + "px";
                
                document.getElementById("shape").style.display = "block";
                
                start = new Date().getTime();
                
            }
            
            function makeAppearAgain() {
                
                setTimeout(makeShapeAppear, Math.random() * 2000);
                
            }

            makeAppearAgain();
        
            document.getElementById("shape").onclick = function() {
                
                document.getElementById("shape").style.display = "none";
                
                var end = new Date().getTime();
                
                var timeTaken = (end - start) / 1000;
                
                document.getElementById("timeTaken").innerHTML = timeTaken + "s";
                
                makeAppearAgain();
                
               
            }