
        const cards = document.querySelectorAll('.card');
        let hasFlippedCard = false;
        let firstCard, secondCard;

        function reloadThePage() {
        window.location.reload();

        } 

        function flipCard() {
            // if(lockBoard) return;
            if(this === firstCard) return;


            this.classList.add('flip');
            if(!hasFlippedCard){
                hasFlippedCard = true;
                firstCard = this;
                return;
            }

            secondCard = this;
            hasFlippedCard = false;

            checkForMatch();

        }

        function checkForMatch(){
            if(firstCard.dataset.card === secondCard.dataset.card){
                disableCards();
                return;
                
            }

                unflipCards();
            
        }

        function disableCards() {
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);

            resetBoard();
        }

        function unflipCards() {
            lockBoard = true;

            setTimeout(() =>{
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');

                resetBoard();
            }, 1000);
        }

        function resetBoard(){
            [hasFlippedCard, lockBoard] = [false, false];
            [firstCard, secondCard] = [null, null];
        }

       ( function Shuffle(){
            cards.forEach((card) => {
                let randomPosition = Math.floor(Math.random() * 12); /* variavel function que random numeros inteiros*/
                card.style.order = randomPosition;
            });
        })();

        cards.forEach((card) => {
            card.addEventListener('click', flipCard)
        });