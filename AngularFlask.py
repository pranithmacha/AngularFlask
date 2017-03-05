from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def hello_world():
    print("inside the default page controller")
    return render_template('home.html')


@app.route('/profile')
def profile():
    print("profile pageee woowww")
    return render_template('static/parptials/profile.html')


@app.route('/blog')
def blah():
    print("blog pageee woowww")
    return render_template('static/partials/blog.html')


if __name__ == '__main__':
    app.debug = True
    app.run()

