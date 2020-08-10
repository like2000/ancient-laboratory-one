from flask import url_for, redirect

from backend import create_app

app = create_app()


@app.route('/')
def index():
    return redirect(url_for('chronicles_blue.index'))


if __name__ == '__main__':
    app.run(debug=True)
