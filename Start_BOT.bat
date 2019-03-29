@echo off
@break off
color 0B
mode con:cols=100 lines=30
title EXTREMELY SelfieBOT

:inicio
color 0B
cls.
call node\node.exe bot.js
echo.
echo.
color 0C
echo OPPs... Algo deu errado!
echo Confira as configuracoes do BOT!
echo Pressione ENTER para prosseguir!
pause>nul
echo Reiniciandoo BOT...
goto inicio