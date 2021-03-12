from flask import Flask, render_template
from datetime import datetime


# https://tilda.cc/page/?pageid=15032430&previewmode=yes#rec247887616


app = Flask('__main__',static_folder="static")


menu = ['О нас','Этапы', 'Дополнительные услуги', 'Галерея','Контакты', 'Наши партнеры']


section1 = {
    'Title' : 'БЫСТРО, ДОСТУПНО, КАЧЕСТВЕННО',
    'plist' : ['ПВХ окна','балконы','входные двери','межкомнатные двери','роллеты','жалюзи всех типов','3Д-панели']
}




@app.route('/')
def index():
    return render_template('index.html', title='Try to leaern it', menu=menu, section1=section1)

if __name__ == '__main__':
    app.run(debug=True)