from backend import db


class Chronicles(db.Model):
    __tablename__ = 'chronicles'

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String, primary_key=True)
    name = db.Column(db.String, primary_key=True)
    active = db.Column(db.Boolean, primary_key=True)
    comment = db.Column(db.String, primary_key=True)
    description = db.Column(db.String, primary_key=True)
    date = db.Column(db.DateTime, primary_key=True)
    time = db.Column(db.DateTime, primary_key=True)

    def __repr__(self):
        return f"Chronicles from {self.date} {self.time}."
