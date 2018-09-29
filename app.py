from flask import Flask, render_template
from data import Articles

app = Flask(__name__)

Articles = Articles()

@app.route('/')
def hello():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/articles')
def articles():
    return render_template('articles.html', articles = Articles)

@app.route('/article/<string:id>/')
def article(id):
    return render_template('article.html', id=id, title = Articles[int(id)-1]['title'],
    body = Articles[int(id)-1]['body'], author = Articles[int(id) - 1]['author'],
    create_date = Articles[int(id)-1]['create-date'])

if __name__ == "__main__":
    app.run(debug=True)
