from backend import db


class Chronicles(db.Model):
    # __tablename__ = 'chronicles'

    # id = db.Column(db.BigInteger, primary_key=True)
    # url = db.Column(db.String, primary_key=True)
    # name = db.Column(db.String, primary_key=True)
    # active = db.Column(db.Boolean, primary_key=True)
    # comment = db.Column(db.String, primary_key=True)
    # description = db.Column(db.String, primary_key=True)
    # date = db.Column(db.String, primary_key=True)
    # time = db.Column(db.String, primary_key=True)

    __tablename__ = 'morpheus'

    id = db.Column(db.BigInteger, primary_key=True)
    active = db.Column(db.Boolean, primary_key=True)
    type = db.Column(db.String, primary_key=True)
    stop = db.Column(db.String, primary_key=True)
    start = db.Column(db.String, primary_key=True)
    total = db.Column(db.Integer, primary_key=True)
    quality = db.Column(db.Integer, primary_key=True)
    day = db.Column(db.String, primary_key=True)
    year = db.Column(db.String, primary_key=True)
    month = db.Column(db.String, primary_key=True)
    weekday = db.Column(db.String, primary_key=True)

    def __repr__(self):
        return f"Chronicles from {self.start} to {self.stop}."

    def serialize(self):
        return {
            'id': self.id,
            'active': self.active,
            'type': self.type,
            'stop': self.stop,
            'start': self.start,
            'total': self.total,
            'quality': self.quality,
            'day': self.day,
            'year': self.year,
            'month': self.month,
            'weekday': self.weekday,
        }
